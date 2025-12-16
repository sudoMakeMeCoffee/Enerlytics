"use client";

import TopNav from "../../../components/global/TopNav";
import AddUserForm from "../admin/AddUserForm";

export default function AdminPage() {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Admin Staff Dashboard</h1>
        <p className="text-sm">Add Customers / Manage Customers</p>
      </div>

      <div>
        <AddUserForm />
      </div>
    </>
  );
}
