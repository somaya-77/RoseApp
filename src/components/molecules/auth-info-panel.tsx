import Image from "next/image";

export default function AuthInfoPanel() {
    return (
        <aside className="relative h-full w-full">
            <Image
                src="/assets/images/image4.png"
                alt="banner"
                fill
                className="object-cover"
                priority
            />
        </aside>
    );
}
