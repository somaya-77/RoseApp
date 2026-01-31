import axios from "axios";
import { getSession } from "next-auth/react";

export const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const session = await getSession();

        if (session?.accessToken) {
            config.headers.token = session.accessToken;

        }

        return config;
    },
    (error) => Promise.reject(error)
);
