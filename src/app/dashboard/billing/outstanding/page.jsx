"use client";

import { Table, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const outstanding = [
  { customer: "John Doe", utility: "Electricity", due: 4500 },
  { customer: "Jane Smith", utility: "Water", due: 900 },
];

export default function OutstandingBills() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Outstanding Bills</h1>

      <Table>
        <TableBody>
          {outstanding.map((b, i) => (
            <TableRow key={i}>
              <TableCell>{b.customer}</TableCell>
              <TableCell>{b.utility}</TableCell>
              <TableCell>Rs. {b.due}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
