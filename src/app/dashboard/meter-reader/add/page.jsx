"use client";

import { useState, useEffect } from "react";

export default function AddMeterReading() {
  const RATE_PER_UNIT = 12; // LKR per unit (example)

  const [prevReading, setPrevReading] = useState(0);
  const [currentReading, setCurrentReading] = useState(0);
  const [units, setUnits] = useState(0);
  const [billAmount, setBillAmount] = useState(0);

  useEffect(() => {
    const usedUnits = Math.max(currentReading - prevReading, 0);
    setUnits(usedUnits);
    setBillAmount(usedUnits * RATE_PER_UNIT);
  }, [prevReading, currentReading]);

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      prevReading,
      currentReading,
      units,
      billAmount,
    };

    console.log("Submitting:", payload);
    alert("Meter reading submitted!");
  }

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Add Meter Reading</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">

        <div>
          <label className="block text-sm font-medium">Previous Reading</label>
          <input
            type="number"
            value={prevReading}
            onChange={(e) => setPrevReading(Number(e.target.value))}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Current Reading</label>
          <input
            type="number"
            value={currentReading}
            onChange={(e) => setCurrentReading(Number(e.target.value))}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Units Used</label>
            <input
              type="number"
              value={units}
              readOnly
              className="w-full bg-gray-100 border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Bill Amount (LKR)</label>
            <input
              type="number"
              value={billAmount}
              readOnly
              className="w-full bg-gray-100 border p-2 rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Reading
        </button>
      </form>
    </div>
  );
}
