"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EditCustomerPage() {
  return (
    <div className="p-6 max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Edit Customer</h1>

      <div className="space-y-2">
        <Label>Full Name</Label>
        <Input defaultValue="John Doe" />
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input defaultValue="john@mail.com" />
      </div>

      <div className="space-y-2">
        <Label>Phone</Label>
        <Input defaultValue="0771234567" />
      </div>

      <div className="space-y-2">
        <Label>NIC</Label>
        <Input defaultValue="200012345678" />
      </div>

      <Button className="w-full">Update Customer</Button>
    </div>
  );
}
