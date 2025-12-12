"use client";

import {
  Users,
  CreditCard,
  Clock,
  UserCog,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDshboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch("/api/admin/users");
        const data = await response.json();
        console.log("API RESPONSE:", data);

        if (Array.isArray(data)) {
          setUsers(data);
        } else if (data && Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error("Failed to load users:", error);
        setUsers([]);
      }
    }

    loadUsers();
  }, []);

  const stats = {
    totalUsers: users.length,
    totalPayments: 842000,
    pendingPayments: 47,
    meterReaders: 12,
  };


  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link href="/dashboard/admin/users/add">
          <button className="px-3 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded cursor-pointer">
            Add New User
          </button>
        </Link>
      </div>

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
            {users.slice(0, 3).map((u) => (
              <tr key={u.id}>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.created_at?.substring(0, 10)}</td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td className="p-3 text-gray-500" colSpan={3}>
                  No users found.
                </td>
              </tr>
            )}
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
            <tr className="border-t">
              <td className="p-3">Achini Perera</td>
              <td className="p-3">LKR 3500</td>
              <td className="p-3">2025-01-07</td>
            </tr>

            <tr className="border-t">
              <td className="p-3">Kasun Madhu</td>
              <td className="p-3">LKR 4200</td>
              <td className="p-3">2025-01-07</td>
            </tr>

            <tr className="border-t">
              <td className="p-3">Sithija Kavee</td>
              <td className="p-3">LKR 3900</td>
              <td className="p-3">2025-01-06</td>
            </tr>
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
