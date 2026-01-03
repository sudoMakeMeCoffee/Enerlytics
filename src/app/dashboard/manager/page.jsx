"use client";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Total Customers", value: 1240 },
  { label: "Active Meters", value: 1105 },
  { label: "Total Revenue", value: "Rs. 12.4M" },
  { label: "Outstanding Amount", value: "Rs. 1.8M" },
];

export default function ManagerDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Manager Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
