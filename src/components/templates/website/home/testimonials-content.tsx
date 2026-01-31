'use client'
import Content from './carousel-content';
import { useTestimonials } from '@/lib/query/website-query/home';

export default function TestimonialsContent() {
    const { data } = useTestimonials();

    return (
        <Content items={data?.testimonials} />
    )
}