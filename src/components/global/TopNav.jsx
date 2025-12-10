"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function TopNav({ title, items = [] }) {
  return (
    <div className="w-full bg-white border-b p-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <SidebarTrigger />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
<div>
  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center cursor-pointer border-2">
    <h2>S</h2>
  </div>
</div>
    </div>
  );
}
