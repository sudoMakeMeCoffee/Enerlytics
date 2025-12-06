"use client";

import TopNav from "../TopNav";

export default function MeterReaderPage() {
  return (
    <>
      <TopNav 
        title="Meter Reader Dashboard" 
        items={["Assigned Meters", "Uploads", "History"]} 
      />

      <div className="p-6">
        <h1 className="text-2xl font-bold">Meter Reader Overview</h1>
      </div>
    </>
  );
}
