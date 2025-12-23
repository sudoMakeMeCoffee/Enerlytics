"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddCustomerPage() {
  return (
    <div className="p-6 max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Add Customer</h1>

      <div className="space-y-2">
        <Label>Full Name</Label>
        <Input />
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input />
      </div>

      <div className="space-y-2">
        <Label>Phone Number</Label>
        <Input />
      </div>

      <div className="space-y-2">
        <Label>NIC</Label>
        <Input />
      </div>

      <Button className="w-full">Save Customer</Button>
    </div>
  );
}
