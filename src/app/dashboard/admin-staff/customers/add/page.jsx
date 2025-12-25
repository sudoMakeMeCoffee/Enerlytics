"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddCustomerPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    nic: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/admin-staff/customers/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(text);
      alert("API error");
      return;
    }

    const data = await res.json();
    alert("Customer added successfully");
    router.push("/dashboard/admin-staff/customers");
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Add Customer</h1>

      <div className="space-y-2">
        <Label>Full Name</Label>
        <Input name="name" value={form.name} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input name="email" value={form.email} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label>Phone Number</Label>
        <Input name="phone" value={form.phone} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label>NIC</Label>
        <Input name="nic" value={form.nic} onChange={handleChange} />
      </div>

      <Button className="w-full">Save Customer</Button>
    </form>
  );
}
