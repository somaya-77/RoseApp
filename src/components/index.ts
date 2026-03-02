// ATOMS
import AuthLanguageSwitcher from "./atoms/auth-language-switcher";
import { Badge } from "./atoms/badge"
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
} from "./atoms/breadcrumb";
import { Button } from "./atoms/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./atoms/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "./atoms/carousel";
import {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogTrigger,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "./atoms/dialog";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
} from "./atoms/dropdown-menu";
import EmptyProductState from "./atoms/empty-products";
import GreetingTitle from "./atoms/greeting-title";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./atoms/hover-card";
import Icon from "./atoms/icon";
import { Input } from "./atoms/input";
import { FileInput } from "./atoms/input-file";
import {
    InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator
} from "./atoms/input-otp";
import { Label } from "./atoms/label";
import LabelFileInput from "./atoms/label-file-input";
import MainTitle from "./atoms/main-title";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationFirst,
    PaginationLast,
    PaginationEllipsis,
} from "./atoms/pagination";
import { PhoneInput } from "./atoms/phone-inputs";
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from "./atoms/popover";
import { ScrollArea, ScrollBar } from "./atoms/scroll";
import { SearchInput } from "./atoms/search-input";
import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton
} from "./atoms/select";
import { Separator } from "./atoms/separator";
import Stepper from "./atoms/stepper";

import { Toaster } from "./atoms/sonner";
import SubTitle from "./atoms/sub-title";
import SubmissionFeedback from "./atoms/submission-feedback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./atoms/tabs";
import { Textarea } from "./atoms/textarea";
import Title from "./atoms/title";
import AuthInfoPanel from "./molecules/auth-info-panel";
import AuthLayoutForm from "./molecules/auth-layout-form";


// MOLECULES
import EmptyNotifications from "./molecules/empty-notifications";
import FormFooter from "./molecules/form-footer";
import LanguageSwitcher from "./molecules/language-switcher";
import Location from "./molecules/location";
import ModeToggle from "./molecules/mode-toggle";
import OccasionCard from "./molecules/occasion-card";
import OccasionsSlider from "./molecules/occasions-slider";
import OTPTimer from "./molecules/otp-timer";
import Searchbar from "./molecules/search-bar";
import DesktopHeader from "./organism/desktop-header";


// ORGANISM
import Footer from "./organism/Footer";
import Header from "./organism/Header";
import InfoUser from "./organism/info-user";
import NavBar from "./organism/NavBar";
import PhoneHeader from "./organism/phone-header";
import TypeInputs from "./organism/type-inputs";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./atoms/form";
import UserDropDown from "./organism/user-dropdown";
import { Sidebar, SidebarProvider } from "./atoms/sidebar";
import {
    Tooltip, TooltipTrigger, TooltipContent, TooltipProvider
} from "./atoms/tooltip";
import {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
} from "./atoms/sheet";
import { Checkbox } from "./atoms/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "./atoms/avatar";
import SubmissionError from "./atoms/submission-error";
import User from "./molecules/user";
import { Skeleton } from "./atoms/skeleton";

export {
    // ATOMS
    Skeleton,
    SubmissionError,
    Avatar, AvatarImage, AvatarFallback,
    SidebarProvider,
    Checkbox,
    Sidebar,
    Icon,
    Input,
    Label,
    Title,
    Badge,
    Button,
    Stepper,
    Toaster,
    Textarea,
    SubTitle,
    Separator,
    MainTitle,
    FileInput,
    PhoneInput,
    SearchInput,
    GreetingTitle,
    LabelFileInput,
    EmptyProductState,
    SubmissionFeedback,
    AuthLanguageSwitcher,


    Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,


    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,

    // Breadcrumb
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
    // Dialog
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogTrigger,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    // DropdownMenu
    DropdownMenuCheckboxItem,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuSeparator,
    DropdownMenuRadioItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuPortal,
    DropdownMenuLabel,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenu,
    // InputOTP
    InputOTPSeparator,
    InputOTPGroup,
    InputOTPSlot,
    InputOTP,
    // Pagination
    PaginationEllipsis,
    PaginationPrevious,
    PaginationContent,
    PaginationFirst,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationLast,
    Pagination,
    // Popover
    PopoverTrigger,
    PopoverContent,
    PopoverAnchor,
    Popover,
    // Scroll
    ScrollArea,
    ScrollBar,
    // Card
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    Card,

    // Carousel
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    
    // select
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,


    // hover card
    HoverCard,
    HoverCardTrigger, HoverCardContent,

    // tab
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,

    // form
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,

    // MOLECULES
    EmptyNotifications,
    LanguageSwitcher,
    OccasionsSlider,
    AuthLayoutForm,
    AuthInfoPanel,
    OccasionCard,
    User,
    ModeToggle,
    FormFooter,
    TypeInputs,
    Searchbar,
    OTPTimer,
    InfoUser,
    Location,

    // ORGANISM
    DesktopHeader,
    UserDropDown,
    PhoneHeader,
    Header,
    NavBar,
    Footer,
}