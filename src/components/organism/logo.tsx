
import Link from "next/link";
import Image from "next/image";
import { Button,Icon } from "@/components";
import { Flower } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex flex-col items-center mt-4 gap-2">

            <Image
                src="/assets/brands/logo.png"
                alt="Logo"
                width={120}
                height={112}
            />

            <Link href="/">
                <Button className="px-10!">
                    <Icon name="Flower" />
                    Preview website
                </Button>
            </Link>
        </div>
    )
}

