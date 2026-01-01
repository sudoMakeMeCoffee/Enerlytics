// this is for get unassigned meters for customers when assigning
import { db } from "@/lib/db";

export async function GET() {
  const connection = await db.getConnection();

  try {
    const [rows] = await connection.query(`
      SELECT m.id, m.meter_number
      FROM meters m
      LEFT JOIN meter_customer_assignments mca
        ON m.id = mca.meter_id
        AND mca.unassigned_at IS NULL
      WHERE mca.meter_id IS NULL
    `);

    return Response.json(rows);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to load meters" }, { status: 500 });
  } finally {
    connection.release();
  }
}


