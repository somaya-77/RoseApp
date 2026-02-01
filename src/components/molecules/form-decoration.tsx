"use client";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { useTheme } from "next-themes";
import useCalculateMargins from "@/hooks/auth/use-calculate-margins";

//variables
const SEPARATOR_IMAGE = "/assets/images/separator-2.png";
const SEPARATOR_IMAGE_Dark = "/assets/images/separator-1.png";

const Separator = ({ rotated = false }: { rotated?: boolean }) => {
  //hooks
  const { getMarginBottom } = useCalculateMargins();
  const { theme } = useTheme();

  return (
    <Image
      src={theme == "dark" ? SEPARATOR_IMAGE_Dark : SEPARATOR_IMAGE}
      className={cn(
        "justify-self-center",
        rotated ? `rotate-180 m-0! ${getMarginBottom()}` : "",
      )}
      alt="separator decoration"
      width={280}
      height={45}
      style={{ width: "auto", height: "auto" }}
    />
  );
};

export default function FormDecoration() {
  return <Separator />;
}

export function FormDecorationInverted() {
  return <Separator rotated />;
}
