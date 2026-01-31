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

// // في ملف الـ Service (الكود الثاني مطور)
// export async function getTestimonialsService() {
//     const response = await fetch(`https://flower.elevateegy.com/api/v1/testimonials`);
//     if (!response.ok) throw new Error('Failed to fetch');
//     return response.json();
// }

// // في ملف الـ Hook (الكود الأول)
// export const useTestimonials = () => {
//     return useQuery({
//         queryKey: ["testimonials"],
//         queryFn: () => getTestimonialsService(), // استدعاء الخدمة هنا
//         staleTime: 1000 * 60 * 5, // كاش لمدة 5 دقائق
//     });
// };