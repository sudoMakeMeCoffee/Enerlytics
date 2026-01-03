"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const bill = {
  billId: "BILL-1001",
  units: 120,
  tariff: "Rs. 30 / unit",
  fixed: 500,
  total: 4500,
};

export default function BillDetails() {
  return (
    <div className="p-6 max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Bill Details</h1>

      <div className="space-y-2 text-sm">
        <p>Units Consumed: <b>{bill.units}</b></p>
        <p>Tariff Applied: <b>{bill.tariff}</b></p>
        <p>Fixed Charges: <b>Rs. {bill.fixed}</b></p>
        <p className="text-lg font-semibold">
          Total: Rs. {bill.total}
        </p>
      </div>

      <Link href={`/dashboard/billing/payments/add/${bill.billId}`}>
        <Button>Record Payment</Button>
      </Link>
    </div>
  );
}
