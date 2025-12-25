"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState, useEffect, use } from "react";

export default function EditCustomerPage({ params }) {
  const router = useRouter();
  const { id: customerId } = use(params);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    nic: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCustomer() {
      const res = await fetch(`/api/admin-staff/customers/${customerId}`)
      if (!res.ok) {
        alert("Customer not found");
        router.back();
        return;
      }

      const data = await res.json();
      setForm(data);
      setLoading(false);
    }

    loadCustomer();
  }, [customerId, router]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(`/api/admin-staff/customers/${customerId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Update failed");
      return;
    }

    alert("Customer updated successfully!");
    router.push("/dashboard/admin-staff/customers");
  }

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Edit Customer</h1>

      <div className="space-y-2">
        <Label>Full Name</Label>
        <Input name="name" value={form.name} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input name="email" value={form.email} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label>Phone</Label>
        <Input name="phone" value={form.phone} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label>NIC</Label>
        <Input name="nic" value={form.nic} onChange={handleChange} />
      </div>

      <Button className="w-full">Update Customer</Button>
      <Button
        onClick={() => router.back()}
      >
        Cancel
      </Button>
    </form>
  );
}
