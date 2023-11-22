import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import {getLocale} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';

export default async function Nav() {
  const locale = await getLocale();
  const messages = (await import(`../../messages/${locale}.json`))
  
  const session = await getServerSession(authOptions);
  return <NextIntlClientProvider messages={messages}><Navbar session={session} /></NextIntlClientProvider>;
}
