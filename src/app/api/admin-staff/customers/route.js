import { db } from "@/lib/db";

export async function GET() {
    try {
        const [rows] = await db.query(
            "SELECT * FROM customers ORDER BY created_at DESC"
        );
        return Response.json(rows);
    } catch (error) {
        console.error(error);
        return Response.json(
            { error: "Failed to fetch customers" },
            { status: 500 }
        );
    }
}