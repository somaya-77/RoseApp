import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateUserProfileAction } from "../../lib/actions/update-profile.action";
import { useTranslations } from "next-intl";
import { UpdateProfileFields } from "@/lib/types/auth";

export default function useUpdateProfile() {
  //translations
  const t = useTranslations("profile");

  //mutation
  const {
    error,
    mutate: updateProfile,
    isPending,
  } = useMutation({
    mutationFn: async (fields: UpdateProfileFields) => {
      const response = await updateUserProfileAction(fields);

      if ("error" in response) {
        throw new Error(response.error);
      }

      return response;
    },
    onSuccess: async () => {
      toast.success(t("update-success"));
    },
  });

  return {
    error,
    updateProfile,
    isPending,
  };
}
