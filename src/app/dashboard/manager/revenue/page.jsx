"use client";

import { Table, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const revenue = [
  { period: "2025-01", utility: "Electricity", amount: 450000 },
  { period: "2025-01", utility: "Water", amount: 180000 },
];

export default function RevenueReports() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Revenue Reports</h1>

      <div className="flex gap-4">
        <select className="border px-3 py-2 rounded">
          <option>Daily</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>

        <select className="border px-3 py-2 rounded">
          <option>All Utilities</option>
          <option>Electricity</option>
          <option>Water</option>
          <option>Gas</option>
        </select>
      </div>

      <Table>
        <TableBody>
          {revenue.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.period}</TableCell>
              <TableCell>{r.utility}</TableCell>
              <TableCell>Rs. {r.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
