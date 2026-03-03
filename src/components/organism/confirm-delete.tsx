"use client";

import { useState } from "react";
import { Trash2, X, AlertTriangle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose,Button } from "@/components"; 

interface Props {
    _id: string;
    message?: string;
    url?: string;
    onDeleteSuccess: () => void;
}

export default function ConfirmDelete({ _id, message="", onDeleteSuccess }: Props) {
    // show & hide delete confirmation dialog
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    // 
    const [isDeleting, setIsDeleting] = useState(false);


    // handle confirm delete
    const handleConfirmDelete = async () => {
        try {
            setIsDeleting(true);
            // إرسال طلب حذف للسيرفر (مثال)
            // const response = await fetch(`/api/categories/${category._id}`, { method: 'DELETE' });

            // محاكاة لعملية حذف ناجحة
            await new Promise(resolve => setTimeout(resolve, 1000)); // تأخير مصطنع لرؤية حالة التحميل

            console.log("Deleted Category ID:", _id);
            // close modal
            setIsDeleteDialogOpen(false);
            // استدعاء دالة النجاح لتحديث الجدول
            onDeleteSuccess();
            // يمكنكِ هنا إضافة Toast Notification للنجاح
        } catch (error) {
            console.error("Failed to delete category:", error);
            // يمكنكِ هنا إضافة Toast Notification للخطأ
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <Button onClick={() => setIsDeleteDialogOpen(true)} variant="ghost" size="sm" className="text-red-600 bg-red-50 hover:bg-red-50">
                <Trash2 className="w-3 h-3" /> Delete
            </Button>




            {/* ========================================= */}
            {/* === Confirmation Dialog (The Modal) === */}
            {/* ========================================= */}
            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent className="max-w-[400px] p-0 overflow-hidden rounded-2xl border-none bg-white shadow-2xl">

                    {/* Header - يحتوي على زر الإغلاق وأيقونة التحذير */}
                    <DialogHeader className="p-6 pb-0 pt-8 flex flex-col items-center relative">
                        <DialogClose asChild>
                            <Button variant="ghost" className="absolute top-4 right-4 h-8 w-8 p-0 rounded-full text-zinc-400 hover:bg-zinc-100">
                                <X className="h-5 w-5" />
                            </Button>
                        </DialogClose>
                        {/* أيقونة السلة الرمادية في الخلفية (اختياري) */}
                        <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 opacity-[0.03] scale-[4]">
                            <Trash2 className="h-20 w-20 text-black" />
                        </div>
                        {/* أيقونة التحذير الحمراء (كما في الصورة) */}
                        <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center relative z-10 mb-6">
                            <AlertTriangle className="h-8 w-8 text-red-600" />
                        </div>
                    </DialogHeader>

                    {/* Body - النص التحذيري */}
                    <div className="p-6 pt-0 text-center">
                        <DialogTitle className="text-xl font-bold text-zinc-950 mb-2">
                            Are you sure you want to delete this category?
                        </DialogTitle>
                        <p className="text-sm text-zinc-500 max-w-[300px] mx-auto">
                            You are about to delete <strong className="text-zinc-900"></strong>. This action is permanent and cannot be undone.
                        </p>
                    </div>

                    {/* Footer - الأزرار */}
                    <DialogFooter className="p-6 pt-0 flex flex-col-reverse sm:flex-row gap-3 sm:gap-2">
                        <DialogClose asChild>
                            <Button variant="outline" className="w-full sm:w-auto flex-1 rounded-xl border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 font-medium">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            variant="destructive"
                            className="w-full sm:w-auto flex-1 rounded-xl bg-red-600 text-white hover:bg-red-700 font-medium"
                            onClick={handleConfirmDelete}
                            disabled={isDeleting} // تعطيل الزر أثناء الحذف
                        >
                            {isDeleting ? "Deleting..." : "Confirm"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}