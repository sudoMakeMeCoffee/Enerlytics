import { db } from "@/lib/db";

export async function POST(req) {
    try {
        const { meterId, meterReaderId } = await req.json();

        if (!meterId || !meterReaderId) {
            return Response.json(
                { error: "Meter and Meter Reader are required" },
                { status: 400 }
            );
        }

        // prevent double assignment
        const [existing] = await db.query(
            "SELECT id FROM meter_reader_assignments WHERE meter_id = ?",
            [meterId]
        );

        if (existing.length > 0) {
            return Response.json(
                { error: "Meter already assigned" },
                { status: 409 }
            );
        }

        await db.query(
            "INSERT INTO meter_reader_assignments (meter_id, meter_reader_id) VALUES (?, ?)",
            [meterId, meterReaderId]
        );

        return Response.json(
            { message: "Meter assigned successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return Response.json(
            { error: "Failed to assign meter" },
            { status: 500 }
        );
    }
}
