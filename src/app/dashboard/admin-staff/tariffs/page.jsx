"use client";

import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import Link from "next/link";

const tariffs = [
  {
    id: 1,
    name: "Domestic Electricity",
    utility: "Electricity",
    status: "Active",
    created: "2024-01-12",
  },
];

export default function TariffListPage() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tariff Plans</h1>
        <Link
          href="/dashboard/admin-staff/tariffs/add"
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Add Tariff
        </Link>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tariff Name</TableCell>
            <TableCell>Utility</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tariffs.map((t) => (
            <TableRow key={t.id}>
              <TableCell>{t.name}</TableCell>
              <TableCell>{t.utility}</TableCell>
              <TableCell>
                <span className={t.status === "Active" ? "text-green-600" : "text-red-600"}>
                  {t.status}
                </span>
              </TableCell>
              <TableCell>{t.created}</TableCell>
              <TableCell className="space-x-3">
                <Link href={`/dashboard/admin-staff/tariffs/${t.id}/edit`} className="underline">
                  Edit
                </Link>
                <button className="text-red-600">Disable</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
