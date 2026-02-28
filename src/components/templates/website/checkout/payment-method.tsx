"use client";

import { cn } from "@/lib/utils/utils";
import { usePayment } from "@/hooks/website/use-payment.hook";
import { Card, CardContent, Button, Icon, Separator } from "@/components";
import { PaymentMethod, PaymentMethodStepProps } from "@/lib/types/props.type";

const PaymentMethodStep: React.FC<PaymentMethodStepProps> = ({ onBack }) => {
    const { isRTL, t, selectedPayment, setSelectedPayment, handleCheckout, isPending, isCardPending } = usePayment();

    const paymentMethods: PaymentMethod[] = [
        {
            id: "cash",
            illustration: (
                <img
                    src="/assets/payment/cash.png"
                    alt={t("methods.cash.title")}
                    className="w-48 mx-auto"
                />
            ),
        },
        {
            id: "card",
            illustration: (
                <img
                    src="/assets/payment/credit.png"
                    alt={t("methods.card.title")}
                    className="w-48 mx-auto"
                />
            ),
        },
    ];
    
    return (
        <div>
            {/* Header */}
            <div className="flex items-center gap-4 mb-7">
                <Button variant="subtle" onClick={onBack} className="border-none">
                    {isRTL ? <Icon name="ArrowRight" size={18} /> : <Icon name="ArrowLeft" size={18} />}
                    {t("back")}
                </Button>

                <h1 className="text-3xl font-semibold">{t("title")}</h1>
            </div>

            {/* Payment cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                {paymentMethods.map((method) => {
                    const isSelected = selectedPayment === method.id;
                    return (
                        <Card
                            key={method.id}
                            onClick={() => setSelectedPayment(method.id)}
                            className={cn(
                                "cursor-pointer transition-all hover:bg-zinc-50",
                                isSelected && "bg-zinc-50",
                            )}
                        >
                            <CardContent className="px-8 py-4 text-center space-y-2.5">
                                {method.illustration}
                                <h3
                                    className={cn(
                                        "text-2xl font-semibold",
                                        isSelected ? "text-maroon-600" : "text-zinc-800",
                                    )}
                                >
                                    {t(`methods.${method.id}.title`)}
                                </h3>
                                <p className="text-sm text-zinc-500">
                                    {t(`methods.${method.id}.description`)}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <Separator className="mb-8" />

            {/* Footer */}
            <div className="flex justify-end">
                <Button
                    onClick={handleCheckout}
                    disabled={!selectedPayment}
                    loading={isPending || isCardPending}
                    className="px-8 py-6 flex items-center gap-2"
                >
                    {t("checkout")}
                    {isRTL ? <Icon name="ArrowLeft" size={20} /> : <Icon name="ArrowRight" size={20} />}
                </Button>
            </div>
        </div>
    );
};

export default PaymentMethodStep;