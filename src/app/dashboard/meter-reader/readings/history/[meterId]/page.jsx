"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const history = [
  { date: "2025-01-01", prev: 200, curr: 250, used: 50 },
  { date: "2024-12-01", prev: 150, curr: 200, used: 50 },
];

export default function ReadingHistoryPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Reading History</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Previous</TableHead>
            <TableHead>Current</TableHead>
            <TableHead>Units Used</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {history.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.date}</TableCell>
              <TableCell>{r.prev}</TableCell>
              <TableCell>{r.curr}</TableCell>
              <TableCell>{r.used}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
