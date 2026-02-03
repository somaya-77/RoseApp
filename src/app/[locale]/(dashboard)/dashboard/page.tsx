import { AllCategories, LowStock, OrderState, Revenue, TopSelling, Total } from "@/components/templates/dashboard";

export default function Page() {

    return (
        <div className="flex flex-col gap-6 h-full">
            {/* first row => total & all categories */}
            <div className="grid grid-cols-3 gap-6">
                <div className="classes col-span-3 lg:col-span-1"><Total /></div>
                <div className="classes col-span-3 lg:col-span-2"><AllCategories /></div>
            </div>
            {/* second row=> order & revenue */}
            <div className="grid grid-cols-4 gap-6">
                <div className="classes col-span-4 lg:col-span-1"><OrderState /></div>
                <div className="classes col-span-4 lg:col-span-3"><Revenue /></div>
            </div>
            {/* third row=> selling & low stock */}
            <div className="grid grid-cols-2 gap-6">
                <div className="classes col-span-2 lg:col-span-1"><TopSelling /></div>
                <div className="classes col-span-2 lg:col-span-1"><LowStock /></div>
            </div>
        </div>
    )
}