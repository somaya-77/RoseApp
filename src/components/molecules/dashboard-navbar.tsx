'use client';

import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components';
import Link from "next/link";
import React from "react";


export default function DashboardNavbar() {

    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment !== "");


    return (
        <nav className="px-4 py-6 bg-white shadow-xl">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                        
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {pathSegments.length > 0 && <BreadcrumbSeparator />}

                    {pathSegments.map((segment, index) => {

                        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathSegments.length - 1;


                        const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

                        return (
                            <React.Fragment key={href}>
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage className="">{title}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link href={href}>{title}</Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>

                                {!isLast && <BreadcrumbSeparator />}
                            </React.Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </nav>
    );
}