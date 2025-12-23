"use client";

import { Users, Zap, ClipboardList, Wrench } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Stat title="Customers" value="2,140" icon={<Users />} />
        <Stat title="Meters" value="2,300" icon={<Zap />} />
        <Stat title="Meter Readers" value="24" icon={<ClipboardList />} />
        <Stat title="Fix Requests" value="12" icon={<Wrench />} />
      </div>
    </div>
  );
}

function Stat({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
      <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
