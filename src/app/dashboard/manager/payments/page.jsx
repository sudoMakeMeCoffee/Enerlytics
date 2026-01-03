"use client";

export default function PaymentAnalysis() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Payment Analysis</h1>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>Total Collected: <b>Rs. 12,500,000</b></p>
        <p>Electricity: Rs. 8,000,000</p>
        <p>Water: Rs. 3,200,000</p>
        <p>Gas: Rs. 1,300,000</p>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>Cash: Rs. 5,000,000</p>
        <p>Card: Rs. 4,500,000</p>
        <p>Online: Rs. 3,000,000</p>
      </div>

      <p className="text-sm text-gray-500">
        Trend: Revenue increased by 8% compared to last month
      </p>
    </div>
  );
}
