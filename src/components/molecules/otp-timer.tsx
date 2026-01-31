'use client';


import { ForgotPasswordFormValues } from '@/lib/schemas/auth/forgot-password.schema';
import { useState, useEffect } from 'react';

export default function OTPTimer({ initialSeconds = 60, onResend,email }: { initialSeconds?: number, onResend: (email: ForgotPasswordFormValues) => void, email: string | null | undefined}) {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds > 0) {
            const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [seconds]);

    const handleResend = () => {
        if (email) {
            setSeconds(initialSeconds); 
            onResend({email}); 
        }
    };

    return (
        <div className="text-sm w-full mb-4 flex flex-col items-center justify-center gap-2">
            {seconds > 0 ? (
                <p>
                    <span className="text-gray-500">You can request another code in: </span>
                    <span className="font-semibold text-blue-600">{seconds}s</span>
                </p>
            ) : (
                <p>
                    <span className="text-gray-500">Didn't receive the code? </span>
                    <button 
                        type="button" 
                        onClick={handleResend}
                        className="text-blue-600 font-semibold hover:underline cursor-pointer"
                    >
                        Resend
                    </button>
                </p>
            )}
        </div>
    );
};