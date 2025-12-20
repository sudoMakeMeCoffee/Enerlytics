"use client";

import Link from "next/link";
import { ClipboardList, Zap, Users } from "lucide-react";

export default function MeterReaderDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Meter Reader Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Meters Assigned" value="120" icon={<Users />} />
        <StatCard title="Readings Today" value="34" icon={<ClipboardList />} />
        <StatCard title="Units Recorded" value="4,820 kWh" icon={<Zap />} />
      </div>

      {/* Action */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Quick Action</h2>
        <Link
          href="/dashboard/meter-reader/add"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Add Meter Reading
        </Link>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
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
