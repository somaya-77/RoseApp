// 'use client'

// import { Button, TypeInputs } from "@/components";
// import { changePasswordInputs } from "@/lib/constance/constance";
// import { useChangePasswordHook } from "@/hooks/use-change-password";

// export default function ChangePasswordForm() {
//     const { form, onSubmit } = useChangePasswordHook()

//     return (
//         <form onSubmit={form.handleSubmit(onSubmit)} className="h-[90%]">
//             <div className="flex flex-col gap-6 justify-center items-center w-full ">
//                 {changePasswordInputs
//                     .map(item => (
//                         <div key={item.id} className="w-full">
//                             <TypeInputs {...item} form={form} />
//                         </div>
//                     ))}
//             </div>

//             <div className="flex gap-5 mt-10">
//                 <Button type="submit" loading={form.formState.isSubmitting}>Save Changes</Button>
//             </div>

//         </form>
//     )
// }
