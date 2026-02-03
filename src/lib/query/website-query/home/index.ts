'use client'

import { axiosInstance } from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";



export const useTestimonials = () => {
    return useQuery({
        queryFn: async () => {
            const res = await axiosInstance.get(`testimonials`);
            return res.data;
        },
        queryKey: ["testimonials"],
    });
};



export const useBestSelling = () => {
    return useQuery({
        queryFn: async () => {
            const res = await axiosInstance.get(`products`);
            return res.data;
        },
        queryKey: ["products"],
    });
};



export const useAllOccasions = () => {
    return useQuery({
        queryFn: async () => {
            const res = await axios.get(`occasions?limit=4`);
            return res.data;
        },
        queryKey: ["occasions"],
    });
};

