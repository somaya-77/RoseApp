"use server";

import { decode, encode, JWT } from "next-auth/jwt";
import { cookies } from "next/headers";

const cookieName =
    process.env.NODE_ENV === "production"
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token";

// GET TOKEN
export default async function getToken() {
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get(cookieName)?.value;

    try {
        const jwt = await decode({
            token: tokenCookie,
            secret: process.env.NEXTAUTH_SECRET!,
        });
        return jwt;
    } catch (error) {
        console.log("error in decoding token", error);

        return null;
    }
}

// SET TOKEN
export async function setToken(token: JWT) {
    const cookieStore = await cookies();

    const encodedToken = await encode({
        token,
        secret: process.env.NEXTAUTH_SECRET!,
    });

    cookieStore.set({
        name: cookieName,
        value: encodedToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
        sameSite: "lax",
    });
}

// UPDATE SESSION TOKEN
export async function updateSessionToken(newToken: string) {
    try {
        const currentToken = await getToken();

        if (!currentToken) {
            throw new Error("No current session found");
        }

        const updatedToken: JWT = {
            ...currentToken,
            accessToken: newToken,
        };

        await setToken(updatedToken);
        return { success: true };
    } catch (error) {
        console.error("Error updating session token:", error);
        return { success: false, error };
    }
}





