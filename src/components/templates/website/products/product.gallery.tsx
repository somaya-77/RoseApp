"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProductDetails } from "@/lib/types/product.type";

export default function ProductGallery({
  images,
  imgCover,
  _id,
}: Pick<ProductDetails, "images" | "imgCover" | "_id">) {
  const [active, setActive] = useState(imgCover);

  return (
    <div className="grid gap-2.5 max-h-130.75 w-full">
      {/* Main Image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
      <Image
        src={active}
        alt="Product image"
        fill
        // width={805}
        // height={402}
        className="object-center transition duration-300 rounded-xl max-h-100.5"
        />
        </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-x-2.5 ">
        {images.map((img) => (
          <button
            key={"thumbnail-" + _id + img}
            onClick={() => setActive(img)}
            className={cn(
              "relative cursor-pointer rounded-md overflow-hidden",
              "before:absolute before:inset-0 before:bg-black/30 before:transition-colors before:duration-200",
              "hover:before:bg-black/10",
              active === img &&
                "ring-2 rounded-md ring-maroon-600 before:bg-black/10  max-h-27.75",
            )}
          >
            <Image
              src={img}
              alt={"Thumbnail product image"}
              width={191}
              height={111}
              className="object-cover rounded-md  max-h-27.75"
            />
          </button>
        ))}
      </div>
    </div>
  );
}