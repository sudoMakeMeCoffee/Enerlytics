import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const { name, email, phone, nic, address, customerType } = await req.json();

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    await db.query(
      "INSERT INTO customers (name, email, phone, nic, address, customer_type) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, phone || null, nic || null, address || null, customerType || "HOUSEHOLD"]
    );

    return Response.json({ message: "Customer added" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to add customer" },
      { status: 500 }
    );
  }
}
