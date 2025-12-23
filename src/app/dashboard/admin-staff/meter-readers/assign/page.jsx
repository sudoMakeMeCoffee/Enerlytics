"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function AssignMeterReaderPage() {
  return (
    <div className="p-6 max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Assign Meter Reader</h1>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select Reader" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="r1">Alex</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select Meter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="m1">MTR-001</SelectItem>
        </SelectContent>
      </Select>

      <Button className="w-full">Assign</Button>
    </div>
  );
}
