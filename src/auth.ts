
import { NextAuthOptions, User, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/constants/api.constance";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
        error: "/login"
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),

                    headers: JSON_HEADER,
                })

                const payload: ApiResponse<User> = await response.json();
                if (!response.ok || "error" in payload) {
                    throw new Error(
                        "error" in payload ? payload.error : "Authentication failed"
                    );
                }

                return {
                    id: payload.user._id,
                    token: payload.token,
                    accessToken: payload.token,
                    user: payload.user,
                }
            }

        })
    ],

    callbacks: {
        async jwt({ token, user, trigger, session }) {
            // if ((trigger as string) === "signOut") {
            //     return {};
            // }

            if (user) {
                token.accessToken = (user as any).accessToken;
                token.user = (user as any).user;
            }

            if (trigger === "update" && session?.user) {
                token.user = session.user;

                if (session.token) {
                    token.accessToken = session.token;
                }
            }

            return token;
        },
        async session({ session, token }) {
            if (!token?.accessToken) {
                return null as unknown as Session;
            }

            session.accessToken = token.accessToken as string;
            session.user = token.user as any;
            return session;
        },
    }
}
