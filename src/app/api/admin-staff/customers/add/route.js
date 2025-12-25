import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const { name, email, phone, nic } = await req.json();

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    await db.query(
      "INSERT INTO customers (name, email, phone, nic) VALUES (?, ?, ?, ?)",
      [name, email, phone || null, nic || null]
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
