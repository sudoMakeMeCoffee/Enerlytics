import { db } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT 
        m.id,
        m.meter_number,
        m.status,
        c.name AS customer_name
      FROM meters m
      LEFT JOIN meter_customer_assignments a
        ON m.id = a.meter_id AND a.unassigned_at IS NULL
      LEFT JOIN customers c
        ON a.customer_id = c.id
      ORDER BY m.created_at DESC
    `);

    return Response.json(rows);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to fetch meters" },
      { status: 500 }
    );
  }
}
