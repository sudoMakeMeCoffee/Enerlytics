"use client";

import {
  Users,
  CreditCard,
  Clock,
  UserCog,
} from "lucide-react";

export default function page() {
  const stats = {
    totalUsers: 1540,
    totalPayments: 842000,
    pendingPayments: 47,
    meterReaders: 12,
  };

  const recentUsers = [
    { name: "Achini Perera", email: "achini@example.com", joined: "2025-01-02" },
    { name: "Sithija Kavee", email: "sith@gmail.com", joined: "2025-01-03" },
    { name: "Nimal Silva", email: "nimal@gmail.com", joined: "2025-01-05" },
  ];

  const recentPayments = [
    { user: "Achini Perera", amount: 3500, date: "2025-01-07" },
    { user: "Kasun Madhu", amount: 4200, date: "2025-01-07" },
    { user: "Sithija Kavee", amount: 3900, date: "2025-01-06" },
  ];

  return (
    <div className="p-6 space-y-8">

      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <SummaryCard
          icon={<Users className="w-8 h-8 text-blue-600" />}
          title="Total Users"
          value={stats.totalUsers}
        />

        <SummaryCard
          icon={<CreditCard className="w-8 h-8 text-green-600" />}
          title="Total Payments"
          value={`LKR ${stats.totalPayments.toLocaleString()}`}
        />

        <SummaryCard
          icon={<Clock className="w-8 h-8 text-yellow-500" />}
          title="Pending Payments"
          value={stats.pendingPayments}
        />

        <SummaryCard
          icon={<UserCog className="w-8 h-8 text-purple-600" />}
          title="Meter Readers"
          value={stats.meterReaders}
        />

      </div>

      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Joined</th>
            </tr>
          </thead>

          <tbody>
            {recentUsers.map((u, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Recent Payments</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">User</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {recentPayments.map((p, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{p.user}</td>
                <td className="p-3">LKR {p.amount}</td>
                <td className="p-3">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

function SummaryCard({ icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
      <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
