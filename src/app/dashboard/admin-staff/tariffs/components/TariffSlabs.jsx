"use client";

import { useState } from "react";

export default function TariffSlabs() {
  const [slabs, setSlabs] = useState([
    { min: "", max: "", rate: "", fixed: "" },
  ]);

  function addSlab() {
    setSlabs([...slabs, { min: "", max: "", rate: "", fixed: "" }]);
  }

  function removeSlab(index) {
    setSlabs(slabs.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Tariff Slabs</h3>

      {slabs.map((slab, i) => (
        <div key={i} className="grid grid-cols-5 gap-3 items-center">
          <input className="border p-2 rounded" placeholder="Min Units" />
          <input className="border p-2 rounded" placeholder="Max Units" />
          <input className="border p-2 rounded" placeholder="Rate / Unit" />
          <input className="border p-2 rounded" placeholder="Fixed Charge" />

          <button
            type="button"
            onClick={() => removeSlab(i)}
            className="text-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addSlab}
        className="border px-3 py-1 rounded"
      >
        + Add Slab
      </button>
    </div>
  );
}
