"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddMeterPage() {

  const router = useRouter();
  const [meterNumber, setMeterNumber] = useState("");
  const [status, setStatus] = useState("ACTIVE");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/admin-staff/meters/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ meterNumber, status }),
    });

    if (!res.ok) {
      alert("Failed to add meter");
      return;
    }

    alert("Meter added");
    router.push("/dashboard/admin-staff/meters");
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Add Meter</h1>

      <div className="space-y-2">
        <Label>Meter Number</Label>
        <Input
          value={meterNumber}
          onChange={(e) => setMeterNumber(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label>status</Label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ACTIVE">ACTIVE</SelectItem>
            <SelectItem value="INACTIVE">INACTIVE</SelectItem>
            <SelectItem value="DISCONNECTED">DISCONNECTED</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full">Save Meter</Button>
    </form >
  );
}
