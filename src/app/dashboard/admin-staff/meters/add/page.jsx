"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddMeterPage() {
  return (
    <div className="p-6 max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Add Meter</h1>

      <div className="space-y-2">
        <Label>Meter Number</Label>
        <Input />
      </div>

      <Button className="w-full">Save Meter</Button>
    </div>
  );
}
