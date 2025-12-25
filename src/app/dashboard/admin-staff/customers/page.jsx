"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useEffect, useState } from "react";


export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCustomers() {
      try {
        const res = await fetch("/api/admin-staff/customers", {
          cache: "no-store",
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("API error:", text);
          return;
        }

        const data = await res.json();
        setCustomers(data);
      } catch (err) {
        console.error("Fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }

    loadCustomers();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customers</h1>
        <Link href="/dashboard/admin-staff/customers/add">
          <Button>Add Customer</Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>NIC</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading && (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                Loading customers...
              </TableCell>
            </TableRow>
          )}

          {!loading && customers.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No customers found
              </TableCell>
            </TableRow>
          )}

          {!loading &&
            customers.map(c => (
              <TableRow key={c.id}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>{c.phone ?? "-"}</TableCell>
                <TableCell>{c.nic ?? "-"}</TableCell>
                <TableCell className="space-x-2">
                  <Link href={`/dashboard/staff/customers/${c.id}/edit`}>
                    <Button size="sm" variant="outline">Edit</Button>
                  </Link>
                  <Button size="sm" variant="destructive">Delete</Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
