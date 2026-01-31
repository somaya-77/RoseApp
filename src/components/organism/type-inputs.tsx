'use client';
// import { Controller } from "react-hook-form";
import { Input, Label, InputOTP, InputOTPSlot } from "@/components";
import { Controller } from "react-hook-form";
// import { PhoneInput } from 'react-international-phone';
// import 'react-international-phone/style.css';

export default function TypeInputs({ form, ...props }: any) {

    const inputStyle = "w-full flex flex-col gap-2"

    switch (props.type) {
        case "text":
            return (
                <div className={inputStyle}>
                    <Label>{props.label}</Label>
                    <Controller
                        control={form.control}
                        name={props.name}
                        render={({ field }) => (
                            <Input {...field} placeholder={props.placeholder}
                            //  error={!!form.formState.errors[props.name]}
                            />
                        )}
                    />
                    <p className="text-sm text-red-600">{form.formState.errors[props.name]?.message}</p>
                </div>
            )

        case "password":
            return (
                <div className={inputStyle}>
                    <Label>{props.label}</Label>
                    <Controller
                        control={form.control}
                        name={props.name}
                        render={({ field }) => (
                            // <PasswordInput {...field} placeholder={props.placeholder} error={!!form.formState.errors[props.name]} />
                            <Input {...field} placeholder={props.placeholder}
                            //  error={!!form.formState.errors[props.name]}
                            />
                        )}
                    />
                    <p className="text-sm text-red-600">{form.formState.errors[props.name]?.message}</p>
                </div>
            )
        // case "phone":
        //     return (
        //         <div className={inputStyle}>
        //             <Label>{props.label}</Label>
        //             <Controller
        //                 control={form.control}
        //                 name={props.name}
        //                 // rules={{ required: "Phone number is required" }}
        //                 render={({ field }) => (
        //                     <div className="">
        //                         <PhoneInput
        //                             {...field}
        //                             defaultCountry='eg'                                  
        //                             onChange={field.onChange}
        //                             onBlur={field.onBlur}
        //                             value={field.value}
        //                             inputStyle={{
        //                                 backgroundColor: 'transparent',
        //                             }}
        //                             inputClassName="w-full bg-transparent"


        //                         />
        //                         {form.formState.errors[props.name] && (
        //                             <p className="text-sm text-red-600">
        //                                 {form.formState.errors[props.name]?.message as string}
        //                             </p>
        //                         )}

        //                     </div>
        //                 )}
        //             />

        //         </div>
        //     )

        // case "otp":
        //     return (
        //         <div className="flex flex-col items-center w-full">

        //             <Controller
        //                 control={form.control}
        //                 name={props.name}
        //                 render={({ field }) => (
        //                     <div className="flex flex-col gap-2">
        //                 <InputOTP 
        //                     maxLength={6} 
        //                     {...field} 
        //                 >
        //                     <div className="flex  gap-8">
        //                         {Array.from({ length: 6 }).map((_, index) => (
        //                             <InputOTPSlot key={index} index={index} />
        //                         ))}
        //                     </div>
        //                 </InputOTP>
        //             </div>
        //                 )}
        //             />
        //             <p className="text-sm text-red-600">{form.formState.errors[props.name]?.message}</p>
        //         </div>
        //     )

        default:
            return null;
    }

}


