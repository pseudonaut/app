import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Storage } from '@google-cloud/storage'; 

interface GCPCredentials {
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_x509_cert_url: string;
}

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
        
        const storage = new Storage({
            projectId: process.env.GCP_PROJECT_ID,
            credentials: {
                type: 'service_account',
                project_id: process.env.GCP_PROJECT_ID,
                private_key_id: process.env.GCP_PRIVATE_KEY_ID,
                private_key: JSON.parse(process.env.GCP_PRIVATE_KEY),
                client_email: process.env.GCP_CLIENT_EMAIL,
                client_id: process.env.GCP_CLIENT_ID,
                auth_uri: process.env.GCP_AUTH_URI,
                token_uri: process.env.GCP_TOKEN_URI,
                auth_provider_x509_cert_url: process.env.GCP_AUTH_PROVIDER_X509,
                client_x509_cert_url: process.env.GCP_CLIENT_X509
            } as GCPCredentials
        });

        const episodeName = request.nextUrl.searchParams.get("episodeName") as string; // Get the URL query parameter
        
        if (!episodeName) {
            return NextResponse.json(
                {
                    error: 'episodeName parameter is missing',
                },
                {
                    status: 400,
                },
            );
        }

        const bucketName = process.env.BUCKET; // Replace with your GCS bucket name

        // Create a signed URL for the specified URL
        const file = storage.bucket(bucketName).file(episodeName);

        // Explicitly annotate the type of signedUrl
        const [signedUrl]: [string] = await file.getSignedUrl({
            version: 'v4',
            action: 'read',
            expires: Date.now() + 3600 * 1000, // Expiration time in milliseconds (1 hour)
        });
        
        return NextResponse.json(
            {
                path: request.nextUrl.pathname,
                signedUrl: signedUrl
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