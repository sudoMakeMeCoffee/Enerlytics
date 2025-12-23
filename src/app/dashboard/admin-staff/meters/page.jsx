"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function MetersPage() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Meters</h1>
        <div className="space-x-2">
          <Link href="/dashboard/admin-staff/meters/add">
            <Button>Add Meter</Button>
          </Link>
          <Link href="/dashboard/admin-staff/meters/assign">
            <Button variant="outline">Assign Meter</Button>
          </Link>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Meter No</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Customer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>MTR-001</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>John Doe</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
