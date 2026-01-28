import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { axiosInstance } from "@/lib/axios";


export const useAxiosAuth = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        const requestIntercept = axiosInstance.interceptors.request.use(
            (config) => {
                const token = session?.accessToken;
                
                if (token && !config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        return () => {
            axiosInstance.interceptors.request.eject(requestIntercept);
        };
    }, [session]);

    return axiosInstance;
};