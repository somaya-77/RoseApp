import OccasionCard from "./occasion-card";
import { occasionsData } from "@/lib/constants/homepage";

export default function OccasionsSection() {

    return (
        <section className='grid grid-cols-6 gap-6'>
            {/* occasions */}
            {occasionsData.map((occasion, index) => (
                // occasion card
                <OccasionCard key={index} occasion={occasion} height={270} />
            ))}
        </section>
    )
}
