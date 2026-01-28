import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { axiosInstance } from "../axios";
import { useAxiosAuth } from "@/hooks/use-axios-auth";




export const useDashboardGetAllExams = (token: string | undefined) => {
    return useQuery({
        queryKey: ["dashboard", "exams", token],
        queryFn: async () => {
            const res = await axiosInstance.get(`exams`, {
                headers: {
                    token: token
                }
            });
            return res.data;
        },
    });
};

export const useDashboardGetAllQuestions = (token: string | undefined) => {
    return useQuery({
        queryKey: ["dashboard", "exams", token],
        queryFn: async () => {
            const res = await axiosInstance.get(`questions`, {
                headers: {
                    token: token
                }
            });
            return res.data;
        },
    });
};
// SUBJECTS
export const useDashboardGetAllSubjects = (page: number, token: string | undefined) => {
    return useQuery({
        queryKey: ["dashboard", "subjects", page, token],
        queryFn: async () => {
            const res = await axiosInstance.get(`subjects?page=${page}`, {
                headers: {
                    token: token
                }
            });
            return res.data;
        },
        enabled: token !== undefined,
        placeholderData: (previousData) => previousData,
    });
};

export const useDashboardPostSubjects = () => {
    const queryClient = useQueryClient();
    const axiosAuth = useAxiosAuth();

    return useMutation({
        mutationFn: async (newSubject: { name: string }) => {
            const res = await axiosAuth.post('subjects', newSubject);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['dashboard', 'subjects'] });
        },
    });
};
