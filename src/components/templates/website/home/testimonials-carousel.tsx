"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { Carousel } from "@/components";
import AutoScroll from "embla-carousel-auto-scroll";

export default function TestimonialsCarousel({ children }: { children: React.ReactNode }) {
    // Translation
    const locale = useLocale();

    // {/* Embla Carousel */ }
    const autoScroll = React.useRef(
        AutoScroll({
            startDelay: 0,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    return (
        <div className="w-full bg-maroon-50 flex flex-col justify-center items-center px-10 py-16 dark:bg-zinc-700">
            <Carousel
                opts={{
                    loop: true,
                    align: "start",
                    direction: locale === "ar" ? "rtl" : "ltr",
                }}
                plugins={[autoScroll.current]}
                className="w-5/6"
            >
                {/* Carousel Content */}
                {children}
            </Carousel>
        </div>
    )
}
