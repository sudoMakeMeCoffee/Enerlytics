"use client";

import TopNav from "../../../components/ui/global/TopNav";
import AddUserForm from "./AddUserForm";

export default function AdminPage() {
  return (
    <>
      <TopNav
        title="Admin Dashboard"
        items={[
          { label: "Users", href: "/dashboard/admin" },
          { label: "Roles", href: "/dashboard/admin/roles" },
          { label: "Logs", href: "/dashboard/admin/logs" },
        ]}
      />

      <div className="p-6">
        <h1 className="text-2xl font-bold">Add User / Manage Users</h1>
      </div>

      <div>
        <AddUserForm />
      </div>
    </>
  );
}
