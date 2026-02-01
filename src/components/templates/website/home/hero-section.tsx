'use client'

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { occasion } from '@/lib/constants/homepage';
import { Button, OccasionCard, OccasionsSlider } from '@/components';

export default function HeroSection() {
    const t = useTranslations("home");

    return (
        <section className="grid grid-cols-7 gap-6">
            {/* shop now card */}
            <div className="col-span-7 lg:col-span-2">
                <OccasionCard occasion={occasion} height={440}>
                    <Link href="/products">
                        {/* shop now button */}
                        <Button>
                            {t("shop")}
                        </Button>
                    </Link>
                </OccasionCard>
            </div>
            {/* slider */}
            <div className="col-span-7 lg:col-span-5">
                <OccasionsSlider />
            </div>
        </section>
    )
}
