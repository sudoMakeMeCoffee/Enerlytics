"use client";

export default function BillingSummary() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Today’s Collection</h1>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>Total Collected: <b>Rs. 12,500</b></p>
        <p>Cash: Rs. 6,000</p>
        <p>Card: Rs. 4,500</p>
        <p>Online: Rs. 2,000</p>
      </div>
    </div>
  );
}
