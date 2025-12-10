"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditUserPage({ params }) {
  const router = useRouter();
  const userId = params.id;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    nic: "",
    role: "admin",
  });

  useEffect(() => {
    
    const mockUser = {
      fullName: "Achini Perera",
      email: "achini@example.com",
      phone: "0771234567",
      nic: "982345678V",
      role: "admin",
    };

    setForm(mockUser);
  }, [userId]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Updating user:", form);

    alert("User updated successfully!");
    router.push("/dashboard/admin/users");
  }

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Edit User</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">NIC</label>
          <input
            name="nic"
            value={form.nic}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="admin">Admin</option>
            <option value="meter-reader">Meter Reader</option>
            <option value="billing">Billing</option>
          </select>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Update
          </button>

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
