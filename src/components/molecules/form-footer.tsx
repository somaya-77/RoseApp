import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FormFooter({ title }: { title: string }) {
  let text = "";
  let link = "";
  let path = "";

  switch (title) {
    case "Create Account":
      text = "Already have an account?";
      link = "Login";
      path = "/login";
      break;

    case "Create a New Password":
    case "Forgot Password":
    case "Verify OTP":
    case "Login":
      text = "Don't have an account?";
      link = "Create yours";
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
