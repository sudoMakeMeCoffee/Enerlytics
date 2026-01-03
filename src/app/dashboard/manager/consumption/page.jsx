"use client";

const usage = [
  { utility: "Electricity", avg: "420 kWh" },
  { utility: "Water", avg: "18 m³" },
  { utility: "Gas", avg: "35 units" },
];

export default function ConsumptionReport() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Consumption Reports</h1>

      {usage.map((u, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <p>{u.utility}</p>
          <p className="font-bold">Average Usage: {u.avg}</p>
        </div>
      ))}
    </div>
  );
}
