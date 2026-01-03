"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const meters = [
  {
    id: "MTR-001",
    utility: "Electricity",
    customer: "John Doe",
    address: "Colombo 07",
    status: "Active",
    periodStatus: "Pending",
  },
  {
    id: "MTR-002",
    utility: "Water",
    customer: "Jane Smith",
    address: "Kandy",
    status: "Active",
    periodStatus: "Completed",
  },
];

export default function MeterReaderDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Assigned Meters</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Meter No</TableHead>
            <TableHead>Utility</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reading</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {meters.map((m) => (
            <TableRow key={m.id}>
              <TableCell>{m.id}</TableCell>
              <TableCell>{m.utility}</TableCell>
              <TableCell>{m.customer}</TableCell>
              <TableCell>{m.address}</TableCell>
              <TableCell>
                <Badge variant={m.periodStatus === "Pending" ? "destructive" : "success"}>
                  {m.periodStatus}
                </Badge>
              </TableCell>
              <TableCell>
                <Link href={`/dashboard/meter-reader/readings/${m.id}`}>
                  <Button size="sm" disabled={m.periodStatus === "Completed"}>
                    Add Reading
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
