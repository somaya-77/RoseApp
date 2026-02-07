"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { OccasionCardProps } from "@/lib/types/props.type";
import { useUrlParams } from "@/hooks/website/use-url-params.hook";

export default function OccasionsCard({ item, isActive}: OccasionCardProps) {
  //hooks
  const { appendParam } = useUrlParams();

  return (
    <div
      onClick={() => appendParam("occasion", item?._id)}
      className="w-full h-20 relative rounded-lg overflow-hidden  cursor-pointer group mt-2">
      {/* Occasion Image */}
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_API_URL}/${item?.image}`}
        fill
        alt={item?.name}
        className="object-cover"
        sizes="(max-width: 768px) 128px, 128px"
      />
      {/* Gradient Overlay */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300 ",
          isActive
            ? "bg-linear-to-b from-[#00000040] to-maroon-600"
            : "bg-linear-to-b from-[#00000080] to-[#000000] group-hover:opacity-0",
        )}
      />
      {/* Occasion Title */}
      <p className="absolute inset-0 flex items-center justify-center text-white font-medium z-10">
        {item?.name}
      </p>
    </div>
  );
}