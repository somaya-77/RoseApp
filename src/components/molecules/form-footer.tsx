import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function FormFooter({ title }: { title: string }) {

  const t = useTranslations("auth")
  let text = "";
  let link = "";
  let path = "";

  switch (title) {
    case "Create Account":
      text = t("form-footer");
      link = t("form-footer-link");
      path = "/login";
      break;

    case "Create a New Password":
    case "Forgot Password":
    case "Verify OTP":
    case "Login":
      text = t("account");
      link = t("create-account");
      path = "/register";
      break;

    default:
      return null;
  }

  return (
    <div
      className={cn(
        "pt-5 font-medium text-sm text-center border-t border-t-zinc-200 mt-6 first-letter:capitalize",
      )}>
      {text}
      <Link className="text-maroon-700 dark:text-softPink-300 font-bold ms-1" href={path}>
        {link}
      </Link>
    </div>
  );
}
