"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useEffect, useState } from "react";


export default function MetersPage() {
  const [meters, setMeters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeters() {
      try {
        const res = await fetch("/api/admin-staff/meters", {
          cache: "no-store",
        });
        const data = await res.json();
        setMeters(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadMeters();
  }, []);

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
            <TableHead>Utility</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Customer</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading && (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                Loading meters...
              </TableCell>
            </TableRow>
          )}

          {!loading && meters.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No meters found
              </TableCell>
            </TableRow>
          )}

          {!loading &&
            meters.map((m) => (
              <TableRow key={m.id}>
                <TableCell>{m.meter_number}</TableCell>
                <TableCell>{m.status}</TableCell>
                <TableCell>{m.utility_type}</TableCell>
                <TableCell>{m.unit}</TableCell>
                <TableCell>
                  {m.customer_name ?? "! Unassigned "}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
