'use client';

import React from 'react';
import { SidebarProvider } from '@/components';

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider open={true}>
            {children}
        </SidebarProvider>
    )
}

export default DashboardProvider;
