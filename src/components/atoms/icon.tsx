import React from "react";
import { cn } from "@/lib/utils";
import {
    GraduationCap, UserRound, ChevronDown, Timer, CircleQuestionMark, LogOut, Lock, CircleUserRound, ArrowRight, ChevronLeft, ChevronRight, MoveLeft, CheckIcon, ClosedCaption, X, ShoppingCart, BrushCleaning,
    CheckCheck,
    EllipsisVertical,
    Check,
    Trash2,
    Bell,
    Search,
    Heart,
    LocationEdit,
    User,
    Sun,
    Moon,
    ArrowLeft,
    Flower,
    LayoutDashboard,
    ClipboardList,
    CalendarHeart,
    Package,
    CircleDollarSign,
    ClipboardListIcon,
    ReceiptText,
    Star,
} from "lucide-react";




const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    ChevronLeft,
    ArrowRight,
    ChevronRight,
    CircleQuestionMark,
    MoveLeft,
    CheckIcon,
    ClosedCaption,
    Star,
    X,
    Sun,
    Moon,
    Check,
    Search,
    ReceiptText,
    ClipboardListIcon,
    CircleDollarSign,
    ShoppingCart,
    Heart,
    LocationEdit,
    User,
    ArrowLeft,
    Flower,
    UserRound,
    GraduationCap,
    LogOut,
    Lock,
    CircleUserRound,
    Timer,
    EllipsisVertical,
    ChevronDown,
    BrushCleaning,
    CheckCheck,
    Trash2,
    Bell,
    LayoutDashboard,
    ClipboardList,
    CalendarHeart,
    Package,
}
// Types
export type IconName = keyof typeof iconMap;
export type IconProps = {} & React.SVGProps<SVGSVGElement> & {
    name: IconName;
    size?: number | string;
    disabled?: boolean;
    className?: string;
};


export default function Icon({ name, size, disabled, className, ...props }: IconProps) {

    const Comp = (iconMap[name as string] ?? (() => null)) as React.ComponentType<React.SVGProps<SVGSVGElement>>;
    const componentClassName = cn(
        "cursor-pointer",
        size ? `w-${size} h-${size}` : "w-5 h-5",
        className,
        disabled && "opacity-50 cursor-not-allowed"
    )
    return (<Comp {...props} className={componentClassName} />)
}


