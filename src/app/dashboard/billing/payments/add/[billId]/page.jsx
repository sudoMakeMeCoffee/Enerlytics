"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";

const bill = {
  billId: "BILL-1001",
  outstanding: 4500,
};

export default function RecordPayment() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function submit() {
    if (Number(amount) > bill.outstanding) {
      setError("Payment exceeds outstanding amount.");
      return;
    }
    setError("");
    alert("Payment recorded (UI only)");
  }

  return (
    <div className="p-6 max-w-md space-y-4">
      <h1 className="text-xl font-bold">Record Payment</h1>

      <div>
        <Label>Bill ID</Label>
        <Input value={bill.billId} disabled />
      </div>

      <div>
        <Label>Payment Amount</Label>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div>
        <Label>Payment Method</Label>
        <select className="w-full border rounded px-3 py-2">
          <option>Cash</option>
          <option>Card</option>
          <option>Online</option>
        </select>
      </div>

      {error && <Alert variant="destructive">{error}</Alert>}

      <Button className="w-full" onClick={submit}>
        Submit Payment
      </Button>
    </div>
  );
}
