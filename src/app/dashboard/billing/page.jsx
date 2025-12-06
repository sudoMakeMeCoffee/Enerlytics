"use client";

import TopNav from "../TopNav";

export default function BillingPage() {
  return (
    <>
      <TopNav 
        title="Billing Dashboard" 
        items={["Invoices", "Payments", "Reports"]} 
      />

      <div className="p-6">
        <h1 className="text-2xl font-bold">Billing Overview</h1>
      </div>
    </>
  );
}
