"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useEffect, useState } from "react";

export default function AssignMeterReaderPage() {
  const [readers, setReaders] = useState([]);
  const [meters, setMeters] = useState([]);
  const [selectedReader, setSelectedReader] = useState("");
  const [selectedMeter, setSelectedMeter] = useState("");

  useEffect(() => {
    fetch("/api/admin-staff/meter-readers")
      .then(res => res.json())
      .then(setReaders);

    fetch("/api/admin-staff/meters/unassigned")
      .then(res => res.json())
      .then(setMeters);
  }, []);

  async function handleAssign() {
    if (!selectedReader || !selectedMeter) {
      alert("Please select both meter and reader");
      return;
    }

    const res = await fetch("/api/admin-staff/meter-readers/assign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meterId: selectedMeter,
        meterReaderId: selectedReader,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Assignment failed");
      return;
    }

    alert("Meter assigned successfully");
    setSelectedMeter("");
    setSelectedReader("");
  }

  return (
    <div className="p-6 max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Assign Meter Reader</h1>

      <Select value={selectedReader} onValueChange={setSelectedReader}>
        <SelectTrigger>
          <SelectValue placeholder="Select Reader" />
        </SelectTrigger>
        <SelectContent>
          {readers.map(r => (
            <SelectItem key={r.id} value={String(r.id)}>
              {r.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedMeter} onValueChange={setSelectedMeter}>
        <SelectTrigger>
          <SelectValue placeholder="Select Meter" />
        </SelectTrigger>
        <SelectContent>
          {meters.map(m => (
            <SelectItem key={m.id} value={String(m.id)}>
              {m.meter_number}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button className="w-full" onClick={handleAssign}>Assign</Button>
    </div>
  );
}
