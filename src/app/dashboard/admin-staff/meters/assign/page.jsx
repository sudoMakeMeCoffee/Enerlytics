"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { useEffect, useState } from "react";

export default function AssignMeterPage() {
  const [meters, setMeters] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedMeter, setSelectedMeter] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");

  useEffect(() => {
    async function loadData() {
      const metersRes = await fetch("/api/admin-staff/meters/assign/unassigned");
      const customersRes = await fetch("/api/admin-staff/customers");

      const metersData = await metersRes.json();
      const customersData = await customersRes.json();

      setMeters(Array.isArray(metersData) ? metersData : []);
      setCustomers(Array.isArray(customersData) ? customersData : []);
    }

    loadData();
  }, []);

  async function handleAssign() {
    if (!selectedMeter || !selectedCustomer) {
      alert("Please select meter and customer");
      return;
    }

    const res = await fetch("/api/admin-staff/meters/assign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meterId: selectedMeter,
        customerId: selectedCustomer,
      }),
    });

    if (!res.ok) {
      alert("Assignment failed");
      return;
    }

    alert("Meter assigned successfully");
    setSelectedMeter("");
    setSelectedCustomer("");
  }

  return (
    <div className="p-6 max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Assign Meter</h1>

      <Select value={selectedMeter} onValueChange={setSelectedMeter}>
        <SelectTrigger>
          <SelectValue placeholder="Select Meter" />
        </SelectTrigger>
        <SelectContent>
          {meters.map((m) => (
            <SelectItem key={m.id} value={String(m.id)}>
              {m.meter_number}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
        <SelectTrigger>
          <SelectValue placeholder="Select Customer" />
        </SelectTrigger>
        <SelectContent>
          {customers.map((c) => (
            <SelectItem key={c.id} value={String(c.id)}>
              {c.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button className="w-full" onClick={handleAssign}>Assign</Button>
    </div>
  );
}
