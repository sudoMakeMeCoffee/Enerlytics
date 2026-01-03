"use client";

import TariffForm from "../components/TariffForm";

export default function AddTariffPage() {
  return (
    <div className="p-6">
      <TariffForm mode="add" />
    </div>
  );
}
