"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";

export default function AssignMeterPage() {
  return (
    <div className="p-6 max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Assign Meter</h1>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select Meter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="m1">MTR-001</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select Customer" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="c1">John Doe</SelectItem>
        </SelectContent>
      </Select>

      <Button className="w-full">Assign</Button>
    </div>
  );
}
