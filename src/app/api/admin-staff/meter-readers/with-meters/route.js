
import { db } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT 
        u.id AS reader_id,
        u.name,
        u.email,
        m.meter_number
      FROM users u
      LEFT JOIN meter_reader_assignments mra 
        ON u.id = mra.meter_reader_id
      LEFT JOIN meters m 
        ON mra.meter_id = m.id
      WHERE u.role = 'METER_READER'
      ORDER BY u.created_at DESC
    `);

    return Response.json(rows);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to fetch meter readers" },
      { status: 500 }
    );
  }
}
