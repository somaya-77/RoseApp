import { Footer, Header } from "@/components";



type LayoutProps = {
    children: React.ReactNode;
};

export default function SiteLayout({
    children,
}: LayoutProps) {

    return (
        <>
            {/** Header */}
            <Header />

            {/** main component */}
            <div className="px-20 pt-10">
                {children}
            </div>

            {/** Footer */}
            <Footer />
        </>
    );
}
