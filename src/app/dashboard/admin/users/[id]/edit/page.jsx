"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { use } from "react";

export default function EditUserPage({ params }) {
  const router = useRouter();
  console.log(use(params));
  const { id: userId } = use(params);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    nic: "",
    role: "ADMIN",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const res = await fetch(`/api/admin/users/${userId}`)
      if (!res.ok) {
        alert("User not found");
        router.back();
        return;
      }

      const data = await res.json();
      setForm(data);
      setLoading(false);
    }

    loadUser();
  }, [userId, router]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(`/api/admin/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Update failed");
      return;
    }

    alert("User updated successfully!");
    router.push("/dashboard/admin/users");
  }

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Edit User</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} />
        <input name="email" value={form.email} onChange={handleChange} />
        <input name="phone" value={form.phone} onChange={handleChange} />
        <input name="nic" value={form.nic} onChange={handleChange} />

        <select name="role" value={form.role} onChange={handleChange}>
          <option value="ADMIN">Admin</option>
          <option value="METER_READER">Meter Reader</option>
          <option value="BILLING">Billing</option>
        </select>

        <button>Update</button>
      </form>
    </div>
  );
}
