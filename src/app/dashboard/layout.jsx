"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { HomeIcon, UserIcon, CreditCardIcon } from "lucide-react";
export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50 w-full">
        <Sidebar
          collapsible="icon"
          className="w-[var(--sidebar-width)] border-r bg-white"
        >
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>
                <h1 className="text-xl font-bold">Enerlytics</h1>
              </SidebarGroupLabel>
              <div className="mt-4">
                <SidebarMenu>
                  <SidebarMenuItem icon={HomeIcon} label="Admin Dashboard" href="/dashboard/admin" />
                  <SidebarMenuItem icon={UserIcon} label="Meter Reader" href="/dashboard/meter-reader"/>
                  <SidebarMenuItem icon={CreditCardIcon} label="Billing" href="/dashboard/billing"/>
                </SidebarMenu>
              </div>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </SidebarProvider>
  );
}
