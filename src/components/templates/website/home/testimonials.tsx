'use client'

import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { MainTitle, SubTitle } from '@/components';
import { TestimonialsCarousel, TestimonialsContentSkeleton, TestimonialsContent } from '..';


export default function Testimonials() {
    // translation
    const t = useTranslations("testimonials");

    return (
        <section className='flex flex-col -mx-20'>
            <SubTitle className="text-center" title={t("title")} />

            <header className="text-center mt-2 mb-10">
                <MainTitle title={t("heading")} />
            </header>

            {/* Carousel */}
            <TestimonialsCarousel>
                <Suspense fallback={<TestimonialsContentSkeleton />}>
                    <TestimonialsContent />
                </Suspense>
            </TestimonialsCarousel>
        </section>
    )
}
