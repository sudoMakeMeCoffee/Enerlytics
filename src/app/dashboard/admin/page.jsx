"use client";

import TopNav from "../TopNav";

export default function AdminPage() {
  return (
    <>
      <TopNav 
        title="Admin Dashboard" 
        items={["Users", "Roles", "Logs"]} 
      />

      <div className="p-6">
        <h1 className="text-2xl font-bold">Add User / Manage Users</h1>
      </div>
    </>
  );
}
