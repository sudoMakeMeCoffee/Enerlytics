"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";

const meter = {
  meterNo: "MTR-001",
  utility: "Electricity",
  previousReading: 250,
};

const units = {
  Electricity: "kWh",
  Water: "m³",
  Gas: "units",
};

export default function AddReadingPage() {
  const [current, setCurrent] = useState("");
  const [error, setError] = useState("");

  function submit() {
    if (Number(current) < meter.previousReading) {
      setError("Current reading cannot be less than previous reading.");
      return;
    }
    setError("");
    alert("Reading submitted (UI only)");
  }

  return (
    <div className="p-6 max-w-lg space-y-4">
      <h1 className="text-2xl font-bold">Add Meter Reading</h1>

      <div>
        <Label>Meter Number</Label>
        <Input value={meter.meterNo} disabled />
      </div>

      <div>
        <Label>Utility Type</Label>
        <Input value={meter.utility} disabled />
      </div>

      <div>
        <Label>Previous Reading ({units[meter.utility]})</Label>
        <Input value={meter.previousReading} disabled />
      </div>

      <div>
        <Label>Current Reading ({units[meter.utility]})</Label>
        <Input
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
      </div>

      {error && <Alert variant="destructive">{error}</Alert>}

      <Button className="w-full" onClick={submit}>
        Submit Reading
      </Button>
    </div>
  );
}
