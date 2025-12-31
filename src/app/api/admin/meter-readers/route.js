import { db } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT COUNT(*) AS count
      FROM users
      WHERE role = 'METER_READER'
    `);

    return Response.json({ count: rows[0].count });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to load meter reader count" }),
      { status: 500 }
    );
  }
}
