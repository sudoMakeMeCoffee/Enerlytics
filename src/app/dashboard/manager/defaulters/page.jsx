"use client";

import { Table, TableRow, TableCell, TableBody } from "@/components/ui/table";

const defaulters = [
  { customer: "John Doe", utility: "Electricity", outstanding: 8500 },
  { customer: "Jane Smith", utility: "Water", outstanding: 3200 },
];

export default function DefaultersReport() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Defaulters Report</h1>

      <Table>
        <TableBody>
          {defaulters.map((d, i) => (
            <TableRow key={i}>
              <TableCell>{d.customer}</TableCell>
              <TableCell>{d.utility}</TableCell>
              <TableCell>Rs. {d.outstanding}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
