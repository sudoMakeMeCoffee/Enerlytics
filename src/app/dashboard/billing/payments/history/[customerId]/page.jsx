"use client";

import { Table, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const history = [
  { period: "Jan 2025", paid: 3000, balance: 1500, date: "2025-01-10" },
  { period: "Dec 2024", paid: 4200, balance: 0, date: "2024-12-15" },
];

export default function PaymentHistory() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Payment History</h1>

      <Table>
        <TableBody>
          {history.map((p, i) => (
            <TableRow key={i}>
              <TableCell>{p.period}</TableCell>
              <TableCell>Paid: Rs. {p.paid}</TableCell>
              <TableCell>Balance: Rs. {p.balance}</TableCell>
              <TableCell>{p.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
