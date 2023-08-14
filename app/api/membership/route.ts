import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import Stripe from 'stripe';
import dbConnect from 'lib/dbConnect'
import User from "models/User";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
});

export async function GET(request: NextRequest) {
    
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json(
            {
                error: 'Unauthorized'
            },
            {
                status: 401,
            },
        );
    }

    try {
        
        // Connect to DB
        await dbConnect();

        const fiveMinutesAgoTimestamp = new Date().getTime() - 5 * 60 * 1000;

        const events = await stripe.events.list({
            type: 'payment_intent.succeeded', // Change this to the event type you want to retrieve
            limit: 100,
            created: {
                gte: Math.floor(fiveMinutesAgoTimestamp / 1000), // Convert to seconds
            },
        });

        const emails: string[] = [];

        for (const event of events.data) {
            const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
            if (paymentIntent && paymentIntent.receipt_email !== null) {
                emails.push(paymentIntent.receipt_email);
            }
        }

        for (const email of emails) {
            const result = await User.findOne({ email: email });

            if (!result) {
                // User not found, create and insert a new user
                const newUser = new User({
                    email: email,
                    membership: 'Paid'
                });
            
                try {
                    await newUser.save();
                } catch (error) {
                    console.error('Error creating and saving user.', error);
                }
            }
            else {
                try {
                    // User found, update the membership and save
                    result.membership = "Paid";
                    await result.save();
                } catch (error) {
                    console.error('Error updating and saving user.', error);
                }
            }
        }

        return NextResponse.json(
            {
                path: request.nextUrl.pathname
            },
            {
                status: 200,
            },
        );
    } 

    catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                error: 'An error occurred while fetching Stripe events',
                path: request.nextUrl.pathname
            },
            {
                status: 500,
            },
        );

    }
}