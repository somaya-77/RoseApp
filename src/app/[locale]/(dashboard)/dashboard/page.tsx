// import { AllCategories, LowStock, OrderState, Revenue, TopSelling, Total } from "@/components/templates/dashboard";
import { AllCategoriesStats, AllStatsCard } from "@/components/templates/dashboard";
import OrdersStatusChart from "@/components/templates/dashboard/overview/orders-status-chart";
import RevenueChart from "@/components/templates/dashboard/overview/revenue-chart";
import AllCategoriesStatsSkeleton from "@/components/templates/skeletons/category-status.skeleton";
import StatisticsCardSkeleton from "@/components/templates/skeletons/statistics.skeleton";
import { orderStatus } from "@/lib/services/order-status.service";
import { Suspense } from "react";

export default async function Page() {
    // fetch orders by status and monthly revenue
    const orders = await orderStatus();

    // extract data for charts
    const ordersByStatus = orders?.statistics?.ordersByStatus;

    const monthlyRevenue = orders?.statistics?.monthlyRevenue;
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* first row => total & all categories */}
            <div className="md:flex gap-6 pt-6  mb-5">
                <Suspense fallback={<StatisticsCardSkeleton />}>
                    <AllStatsCard />
                </Suspense>
                <Suspense fallback={<AllCategoriesStatsSkeleton />}>
                    <AllCategoriesStats />
                </Suspense>
            </div>
            {/* second row=> order & revenue */}
            <div className="grid grid-cols-4 gap-6">
                <div className="classes col-span-4 lg:col-span-1"> <OrdersStatusChart data={ordersByStatus} /></div>
                <div className="classes col-span-4 lg:col-span-3"><RevenueChart data={monthlyRevenue} /></div>
            </div>
            {/* third row=> selling & low stock */}
            <div className="grid grid-cols-2 gap-6">
                {/* <div className="classes col-span-2 lg:col-span-1"><TopSelling /></div> */}
                {/* <div className="classes col-span-2 lg:col-span-1"><LowStock /></div> */}
            </div>
        </div>
    )
}