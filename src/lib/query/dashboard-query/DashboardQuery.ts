
import { axiosInstance } from "../../axios";
import { useAxiosAuth } from "@/hooks/auth/use-axios-auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";




// export const useDashboardGetAllExams = (token: string | undefined) => {
//     return useQuery({
//         queryKey: ["dashboard", "exams", token],
//         queryFn: async () => {
//             const res = await axiosInstance.get(`exams`, {
//                 headers: {
//                     token: token
//                 }
//             });
//             return res.data;
//         },
//     });
// };


