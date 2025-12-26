import { db } from "@/lib/db";

export async function POST(req) {
    try {
        const { meterNumber, status } = await req.json();

        if (!meterNumber) {
            return Response.json(
                { error: "Meter number is required" },
                { status: 400 }
            );
        }

        await db.query(
            "INSERT INTO meters (meter_number, status) VALUES (?, ?)",
            [meterNumber, status || "ACTIVE"]
        );

        return Response.json({ message: "Meter added" }, { status: 201 });
    } catch (err) {
        console.error(err);
        return Response.json(
            { error: "Failed to add meter" },
            { status: 500 }
        );
    }
}