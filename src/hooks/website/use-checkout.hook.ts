'use client'

import { useState } from "react";

export function useCheckoutHook() {

    //Hooks
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [selectedAddress, setSelectedAddress] = useState<string>('');

    //State
    const steps: string[] = ['Shipping Address', 'Payment Method'];

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBackStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleComplete = () => {
        alert('Order completed successfully!');
    };

    return { currentStep, selectedAddress, setSelectedAddress, steps, handleNextStep, handleBackStep, handleComplete }
}