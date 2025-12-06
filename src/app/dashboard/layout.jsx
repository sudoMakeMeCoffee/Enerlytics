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
import { HomeIcon, UserIcon, CreditCardIcon, SettingsIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  // Menus for each dashboard
  const adminMenu = [
    { label: "Dashboard", icon: HomeIcon, href: "/dashboard/admin" },
    { label: "Users", icon: UserIcon, href: "/dashboard/admin/users" },
    { label: "Logs", icon: SettingsIcon, href: "/dashboard/admin/logs" },
  ];

  const meterReaderMenu = [
    { label: "Dashboard", icon: HomeIcon, href: "/dashboard/meter-reader" },
    { label: "Readings", icon: CreditCardIcon, href: "/dashboard/meter-reader/readings" },
  ];

  const billingMenu = [
    { label: "Dashboard", icon: HomeIcon, href: "/dashboard/billing" },
    { label: "Invoices", icon: CreditCardIcon, href: "/dashboard/billing/invoices" },
  ];

  function getMenu() {
    if (pathname.startsWith("/dashboard/admin")) return adminMenu;
    if (pathname.startsWith("/dashboard/meter-reader")) return meterReaderMenu;
    if (pathname.startsWith("/dashboard/billing")) return billingMenu;
    return [];
  }

  const menu = getMenu();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50 w-full">
        <Sidebar collapsible="icon" className="border-r bg-white">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>
                <h1 className="text-xl font-bold">Enerlytics</h1>
              </SidebarGroupLabel>

              <div className="mt-4">
                <SidebarMenu>
                  {menu.map((item, i) => (
                    <SidebarMenuItem
                      key={i}
                      icon={item.icon}
                      label={item.label}
                      href={item.href}
                    />
                  ))}
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
