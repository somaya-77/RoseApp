"use client";

import { Input, Card, CardContent, Icon, Button } from "@/components";
import { useSummaryCart } from "@/hooks/website/use-summary-cart.hook";

export default function CartSummary() {
    // hooks
    const { isRTL, t, total, isCheckoutDisabled, handleCheckout } = useSummaryCart();

    return (
        <div className="w-116" dir={isRTL ? "rtl" : "ltr"}>
            {/* Title */}
            <h2 className="text-3xl font-semibold mb-6">{t("title")}</h2>

            {/* Summary Card */}
            <Card className="rounded-2xl border-none bg-zinc-50">
                {/* Coupon Code Section */}
                <CardContent className="p-4 space-y-2.5">
                    <div className="flex gap-2.5">
                        <Input className="h-12" placeholder={t("coupon-placeholder")} />
                        <Button className="h-12">
                            <Icon name="Ticket" size={20} />
                            {t("apply")}
                        </Button>
                    </div>

                    <div className="h-64 rounded-lg border flex items-center justify-center text-zinc-400 italic">
                        {t("no-coupons")}
                    </div>

                    {/* Total Price */}
                    <div className="flex items-center justify-between text-zinc-800 text-2xl font-bold">
                        <span>{t("total")}</span>
                        <span>
                            {total.toFixed(2)} {t("currency")}
                        </span>
                    </div>
                </CardContent>
            </Card>

            {/* Checkout Button */}
            <Button
                className="w-full h-16 mt-6 gap-2.5 text-xl"
                onClick={handleCheckout}
                disabled={isCheckoutDisabled}
            >
                {t("checkout")}
                {!isRTL && <Icon name="MoveRight" size={24} />}
                {isRTL && <Icon name="MoveLeft" size={24} />}
            </Button>
        </div>
    );
}