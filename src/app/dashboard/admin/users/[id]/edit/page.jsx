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
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">NIC</label>
          <input name="nic" value={form.nic} onChange={handleChange} className="w-full border rounded p-2" />
        </div>


        <div>
          <label className="block text-sm mb-1">Role</label>
          <select name="role" value={form.role} onChange={handleChange} className="w-full border rounded p-2">
            <option value="ADMIN_STAFF">Admin Staff</option>
            <option value="MANAGER">Billing Clerk</option>
            <option value="METER_READER">Meter Reader</option>
            <option value="CASHIER">Billing Clerk</option>
          </select>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="bg-gray-300 px-4 py-2 rounded" >Update</button>
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => router.back()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
