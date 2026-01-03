"use client";

import TariffSlabs from "./TariffSlabs";

export default function TariffForm({ mode = "add" }) {
  return (
    <form className="space-y-6 bg-white p-6 rounded shadow max-w-3xl">
      <h2 className="text-xl font-semibold">
        {mode === "add" ? "Add New Tariff" : "Edit Tariff"}
      </h2>

      {/* Tariff Info */}
      <div className="grid grid-cols-2 gap-4">
        <input className="border p-2 rounded" placeholder="Tariff Name" />

        <select className="border p-2 rounded">
          <option>Electricity</option>
          <option>Water</option>
          <option>Gas</option>
        </select>

        <select className="border p-2 rounded">
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Slabs */}
      <TariffSlabs />

      <button className="bg-black text-white px-4 py-2 rounded">
        {mode === "add" ? "Add Tariff" : "Update Tariff"}
      </button>
    </form>
  );
}
