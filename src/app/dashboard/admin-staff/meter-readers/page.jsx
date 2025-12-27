"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useEffect, useState } from "react";

export default function MeterReadersPage() {

  const [readers, setReaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReaders() {
      const res = await fetch("/api/admin-staff/meter-readers/with-meters", {
        cache: "no-store",
      });
      const data = await res.json();
      setReaders(data);
      setLoading(false);
    }

    loadReaders();
  }, []);

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
          {loading && (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          )}

          {!loading && readers.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No meter readers found
              </TableCell>
            </TableRow>
          )}

          {!loading &&
            readers.map(r => (
              <TableRow key={r.reader_id}>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.email}</TableCell>
                <TableCell>
                  {r.meter_number ?? "—"}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
