import Image from "next/image";
import Link from "next/link";



export default function PhoneHeader() {


    return (
        <>
            <div className="flex items-center justify-between px-9 py-4 gap-4 shadow-lg border-b border-b-zinc-300">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/assets/brands/logo.png"
                        alt="Logo"
                        width={85}
                        height={80}
                    />
                </Link>
                {/* icon */}
            </div>
{/* content */}
            <div>

            </div>

            {/* <NavBar /> */}
        </>
    )
}