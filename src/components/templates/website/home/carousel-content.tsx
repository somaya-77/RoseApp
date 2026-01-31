"use client";

import TestimonialsCard from "./testimonials-card";
import { CarouselContent, CarouselItem } from "@/components";
import { TestimonialsCarouselProps } from "@/lib/types/interface";


export default function Content({ items }: TestimonialsCarouselProps) {

    return (
        <CarouselContent>
            {Array.isArray(items) && [...items, ...items].map((item, index) => (
                <CarouselItem
                    key={index}
                    className="basis-full sm:basis-1/2 lg:basis-1/3 pt-11 px-8 pb-16"
                >
                    <TestimonialsCard
                        testimonial={item}
                        key={item._id}
                    />
                </CarouselItem>
            ))}
        </CarouselContent>
    );
}
