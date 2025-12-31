"use client";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const res = await fetch("/api/admin/users", { cache: "no-store", });
      const data = await res.json();
      setUsers(data);
    }
    loadUsers();
  }, []);

  async function deleteUser(id) {
    if (!confirm("Delete user?")) return;

    const res = await fetch(`/api/admin/users/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Delete failed");
      return;
    }

    alert("User deleted successfully!");
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  return (
    <div className="bg-white shadow-sm border rounded-lg p-6 mt-4 mx-2">
      <div className="w-full flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold mb-4">All Users</h2>
        <Link href="/dashboard/admin/users/add">
          <button className="px-3 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded cursor-pointer">
            + Add New User
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Full Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">NIC</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="border-t">
                <td className="p-3 border">{user.name}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border">{user.phone}</td>
                <td className="p-3 border">{user.nic}</td>
                <td className="p-3 border">{user.role}</td>
                <td className="p-3 border">
                  <div className="flex gap-2">
                    <Link href={`/dashboard/admin/users/${user.id}/edit`}>
                      <button className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded">
                        Edit
                      </button>
                    </Link>
                    <button className="px-3 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded" onClick={() => deleteUser(user.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan={5}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
