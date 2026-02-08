"use client";

import { TestimonialsCarouselProps } from "@/lib/types/testimonials.type";
import TestimonialsCard from "./testimonials-card";
import { Carousel, CarouselContent, CarouselItem } from "@/components";


export default function Content({ items }: TestimonialsCarouselProps) {

    return (
        <Carousel>
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
        </Carousel>
    );
}
