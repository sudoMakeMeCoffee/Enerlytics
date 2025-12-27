"use client";

import { Users, Zap, ClipboardList, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    customers: 0,
    meters: 0,
    meterReaders: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin-staff/")
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Staff Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Stat title="Customers" value={loading ? "—" : stats.customers} icon={<Users />} />
        <Stat title="Meters" value={loading ? "—" : stats.meters} icon={<Zap />} />
        <Stat title="Meter Readers" value={loading ? "—" : stats.meterReaders}  icon={<ClipboardList />} />
        <Stat title="Fix Requests" value="—"  icon={<Wrench />} />
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
