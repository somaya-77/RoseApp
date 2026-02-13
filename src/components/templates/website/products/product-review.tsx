import { Suspense } from "react";
import AddReview from "./add-review";
import AllReviews from "./all-reviews";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { getTranslations } from "next-intl/server";
import MainTitle from "@/components/atoms/main-title";
import { renderStars } from "./render-stars";
import AllReviewsSkeleton from "../../skeletons/all-reviews.skeleton";

export default async function ProductReviews({ productId}: {productId: string;}) {
    //auth
    const session = await getServerSession(authOptions);

    //Translation
    const t = await getTranslations("review");

    return (
        <div className="my-6">
            {/* Title */}
            <MainTitle title={t("title")} />

            {/* General rating */}
            <div className="flex flex-col gap-1 text-zinc-800 dark:text-zinc-50 border-b pb-6 border-zinc-200">
                {/*General rating title */}
                <span className="font-semibold text-xl">{t("general-rating")}:</span>
                {/** Rating number */}
                <div>
                    <span className="font-bold text-2xl">{3} </span>
                    <span className="font-medium text-sm text-zinc-500"> ({5} {t("ratings")})</span>
                </div>
                {/** Rating stars */}
                <span className="flex gap-1">{renderStars(4)}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4  dark:border-zinc-700 max-h-96">
                {/* All product reviews*/}
                <div className="flex flex-col overflow-y-auto lg:col-span-2 p-4 pl-0 border-r border-zinc-200 ">
                    <Suspense fallback={<AllReviewsSkeleton />} >
                        <AllReviews productId={productId} />
                    </Suspense>
                </div>

                {/* Add review */}
                <div className="py-4">
                    <div className={`${!session ? "blur-sm pointer-events-none select-none" : ""}`}>
                        <AddReview productId={productId} />
                    </div>

                    {!session && (
                        <div className="absolute rounded-md left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-white/60 dark:bg-black/60 backdrop-blur-[0.1px]">
                            <p className="text-center font-semibold text-base leading-100 text-zinc-800 dark:text-zinc-100">
                                {t('unauthorized-add-review')}
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
