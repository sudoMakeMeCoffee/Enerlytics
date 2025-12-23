"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function MeterReadersPage() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Meter Readers</h1>
        <Link href="/dashboard/admin-staff/meter-readers/assign">
          <Button>Assign Reader</Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Assigned Meter</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alex</TableCell>
            <TableCell>alex@mail.com</TableCell>
            <TableCell>MTR-001</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
