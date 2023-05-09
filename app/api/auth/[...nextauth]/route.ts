import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
export const authOptions: NextAuthOptions = {
    secret: "abc",
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            profile(profile) {
                return {
                    // Return all the profile information you need.
                    // The only truly required field is `id`
                    // to be able identify the account when added to a database
                }
            },
            allowDangerousEmailAccountLinking: true
        })
    ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };