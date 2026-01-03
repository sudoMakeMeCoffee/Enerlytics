"use client";

import { Table, TableRow, TableCell, TableBody } from "@/components/ui/table";

const consumers = [
  { customer: "ABC Industries", utility: "Electricity", usage: "12000 kWh" },
  { customer: "XYZ Hotel", utility: "Water", usage: "800 m³" },
];

export default function TopConsumers() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top Consumers</h1>

      <Table>
        <TableBody>
          {consumers.map((c, i) => (
            <TableRow key={i}>
              <TableCell>{c.customer}</TableCell>
              <TableCell>{c.utility}</TableCell>
              <TableCell>{c.usage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
