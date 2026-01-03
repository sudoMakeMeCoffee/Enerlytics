"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table, TableHeader, TableRow, TableHead, TableBody, TableCell
} from "@/components/ui/table";

const bills = [
  {
    id: "BILL-1001",
    customer: "John Doe",
    meter: "MTR-001",
    utility: "Electricity",
    period: "Jan 2025",
    amount: 4500,
    status: "Unpaid",
  },
  {
    id: "BILL-1002",
    customer: "Jane Smith",
    meter: "MTR-002",
    utility: "Water",
    period: "Jan 2025",
    amount: 1800,
    status: "Paid",
  },
];

export default function BillingDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Bills</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Bill ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Meter</TableHead>
            <TableHead>Utility</TableHead>
            <TableHead>Period</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bills.map((b) => (
            <TableRow key={b.id}>
              <TableCell>{b.id}</TableCell>
              <TableCell>{b.customer}</TableCell>
              <TableCell>{b.meter}</TableCell>
              <TableCell>{b.utility}</TableCell>
              <TableCell>{b.period}</TableCell>
              <TableCell>Rs. {b.amount}</TableCell>
              <TableCell>
                <Badge variant={
                  b.status === "Paid"
                    ? "success"
                    : b.status === "Unpaid"
                    ? "destructive"
                    : "warning"
                }>
                  {b.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Link href={`/dashboard/billing/bills/${b.id}`}>
                  <Button size="sm">View</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
