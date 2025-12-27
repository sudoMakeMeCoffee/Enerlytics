import { db } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT id, name, email FROM users WHERE role = 'METER_READER' ORDER BY created_at DESC"
    );

    return Response.json(rows, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

