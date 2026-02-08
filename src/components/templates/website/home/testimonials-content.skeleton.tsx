'use client';

import { TestimonialsCardSkeleton } from '..';
import { Carousel, CarouselContent, CarouselItem } from '@/components';

export default function TestimonialsContentSkeleton() {
    return (
        <Carousel>
        <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem
                    key={index}
                    className="basis-full sm:basis-1/2 lg:basis-1/3 pt-11 px-8 pb-16"
                >
                    <TestimonialsCardSkeleton />
                </CarouselItem>
            ))}
        </CarouselContent>
        </Carousel>
    );
}

