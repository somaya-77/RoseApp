"use client";
import React, { useState } from "react";
import { Button } from "@/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { changePasswordSchema } from "@/lib/schemes/auth.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  SubmissionError,
} from "@/components";
// import useChangePassword from "../../../../../hooks/website/use-change-password";
import { ChangePasswordFields } from "@/lib/types/auth";
import { useTranslations } from "next-intl";
import { changePasswordSchema } from "@/lib/schemas/change-password.schema";
import useChangePassword from "@/hooks/website/use-change-password";
import { InputPassword } from "@/components/molecules/input-password";
// import { InputPassword } from "@/components";
// import SubmissionError from "@/components/shared/submission-error";

export default function ChangePasswordForm() {
  //translations
  const t = useTranslations("auth");

  //state
  const [errorMessage, setErrorMessage] = useState("");

  //hooks
  const { changePassword, isPending } = useChangePassword();

  //form
  const form = useForm<ChangePasswordFields>({
    mode: "onChange",
    defaultValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: zodResolver(changePasswordSchema(t)),
  });
  const submitHandler: SubmitHandler<ChangePasswordFields> = async (data) => {
    setErrorMessage("");

    const dataToSend = { ...data };
    delete dataToSend.confirmNewPassword;
    changePassword(dataToSend, {
      onError: (error) => {
        const errorMsg = error.message.toLowerCase();

        //change error message to more friendly one
        if (errorMsg.includes("password") && errorMsg.includes("pattern")) {
          setErrorMessage(
            "Password must be at least 8 characters with uppercase, lowercase, number, and special character",
          );
        } else {
          setErrorMessage(error.message);
        }
      },
      onSuccess: () => {
        setErrorMessage("");
        form.reset();
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="border-b pb-6">
              {/* Label */}
              <FormLabel>{t("oldpassword-label")}</FormLabel>

              {/* Input */}
              <FormControl>
                <InputPassword
                  {...field}
                  type="password"
                  placeholder="********"
                />
              </FormControl>

              {/* Error Message */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem className="mt-7">
              {/* Label */}
              <FormLabel>{t("newpassword-label")}</FormLabel>

              {/* Input */}
              <FormControl>
                <InputPassword
                  {...field}
                  type="password"
                  placeholder="********"
                />
              </FormControl>

              {/* Error Message */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem className="mt-2">
              {/* Label */}
              <FormLabel>{t("confirm-newpassword-label")}</FormLabel>

              {/* Input */}
              <FormControl>
                <InputPassword
                  {...field}
                  type="password"
                  placeholder="********"
                />
              </FormControl>

              {/* Error Message */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submission Error */}
        {errorMessage && <SubmissionError errorMessage={errorMessage} />}
        <Button
          disabled={isPending || form.formState.isSubmitting}
          className="w-57 mt-20 ms-auto block">
          {t("change-password-button")}
        </Button>
      </form>
    </Form>
  );
}
