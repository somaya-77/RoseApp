import { platform } from "os";

export const dashboardLinks = [
    { 
        href: "/dashboard", 
        label: "Overview", 
        icon: "LayoutDashboard" },

    {
        href: "/categories",
        label: "Categories",
        icon: "ClipboardList",
    },
    {
        href: "/occasions",
        label: "Occasions",
        icon: "CalendarHeart",
    },
        {
        href: "/products",
        label: "Products",
        icon: "Package",
    }
];


export const totalData = [
    {bg: "bg-[#FBEAEA]",text: "text-[#A6252A]", title: "Total products", icon:"Package",num: "12"},
    {bg: "bg-[#0063D00D]",text: "text-[#155DFC]", title: "Total orders", icon:"ReceiptText",num: "1,284"},
    {bg: "bg-[#753CBF0D]",text: "text-[#753CBF]", title: "Total categories", icon:"ClipboardListIcon",num: "125"},
    {bg: "bg-[#0089610D]",text: "text-[#009966]", title: "Total revenue", icon:"CircleDollarSign",num: "6,824,528", pound:"EGP"},
];


export const categoryInputs = [
    { id: 1, label: "Name", type: "text", name: "name", placeholder: "Enter category name" },
    { id: 2, label: "Category Image", type: "file", name: "image" }
];

export const occasionInputs = [
    { id: 1, label: "Name", type: "text", name: "name" , placeholder: "Enter occasion name"},
    { id: 2, label: "Occasion Image", type: "file", name: "image" }
];

export const productInputs = [
    { id: 1, label: "Title", type: "text", name: "title" , placeholder: "Enter product title"},
    { id: 2, label: "Description", type: "textarea", name: "description" , placeholder: "Enter product description"},
    { id: 3, label: "Price", type: "number", name: "price" , placeholder: "Example: 5000"},
    { id: 4, label: "Discount", type: "number", name: "discount" , placeholder: "Example: 5"},
    { id: 5, label: "Price after discount", type: "number", name: "price_after_discount" , placeholder: "Example: 5"},
    { id: 6, label: "Quantity", type: "number", name: "quantity" , placeholder: "Example: 200"},
    { id: 7, label: "Product cover image", type: "file", name: "cover" },
    { id: 8, label: "Product gallery", type: "file", name: "image" },
    { id: 9, label: "Category", type: "select", name: "category" },
    { id: 10, label: "Occasion", type: "select", name: "occasion" },
];


export const profileInputs = [
    { id: 1, label: "Profile Image", type: "upload", name: "image" },
    { id: 2, label: "First name", type: "text", name: "first-name"},
    { id: 3, label: "Last name", type: "text", name: "last-name"},
    { id: 4, label: "Email", type: "text", name: "email"},
    { id: 5, label: "Phone", type: "text", name: "phone"},
    { id: 6, label: "Gender", type: "text", name: "gender"},

];