import Episodes from "./episodes";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return <Episodes session={session} />;
}
