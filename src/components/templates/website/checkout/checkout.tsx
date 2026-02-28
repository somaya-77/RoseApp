"use client"

import { Stepper } from '@/components';
import { PaymentMethodStep, ShippingAddressStep } from '..';
import { useCheckoutHook } from "@/hooks/website/use-checkout.hook";


export default function Checkout() {
    const { currentStep, selectedAddress, setSelectedAddress, steps, handleNextStep, handleBackStep, handleComplete } = useCheckoutHook();

    return (
        <div className=" w-196">
            <div className="max-w-3xl mx-auto">
                <Stepper steps={steps} currentStep={currentStep} />

                {currentStep === 0 && (
                    <ShippingAddressStep
                        selectedAddress={selectedAddress}
                        setSelectedAddress={setSelectedAddress}
                        onNext={handleNextStep}
                    />
                )}

                {currentStep === 1 && (
                    <PaymentMethodStep
                        onBack={handleBackStep}
                        onNext={handleComplete}
                    />
                )}
            </div>
        </div>
    );
}