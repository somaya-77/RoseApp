
"use client"
// import { allCategoriesService } from "@/lib/services/category.service";
// import { Table } from "../ui/table";
import DynamicTable from "./dynamic-table";
import HeaderTable from "./header-table";
import SearchTable from "./search-table";
// import { useCategories } from "@/app/[locale]/(site)/products/_hooks/use-category";
// import { AppPagination } from "../ui/pagination";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


interface Props  {
        initialData: any[],
        totalPages: number,
        currentPage: number, 
        title: string, 
        link: string, 
        btnTitle: string,
        editPath: string,
    }
export default function CustomTable({ initialData,
    totalPages,
    currentPage, title, link, btnTitle,editPath }:Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());


        router.push(`${pathname}?${params.toString()}`);
    };


    // console.log("initialData", initialData)
    const header: Record<string, string> = {
        // name: "Category Name",
        productsCount: "Products",
        // slug: "Identifier"
    };
    return (
        <div className="w-full h-full rounded-lg  p-6 flex flex-col gap-[1.125rem]">
            {/* header */}
            <HeaderTable title={title} link={link} btnTitle={btnTitle} />
            {/* search */}
            <SearchTable />
            {/* table */}
            <DynamicTable 
            data={initialData || []} 
            title="All Categories" 
            btnTitle="Add Category" 
            headerMap={header}
                suffixMap={{ productsCount: "products" }}
                editPath={editPath}
            />
            {/* pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center">
                    {/* <AppPagination
                        page={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    /> */}
                </div>
            )}
        </div>
    )
}