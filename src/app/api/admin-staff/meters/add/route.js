import { db } from "@/lib/db";

export async function POST(req) {
    try {
        const { meterNumber, status, utilityType } = await req.json();

        if (!meterNumber || !utilityType) {
            return Response.json(
                { error: "Meter number and utility type are required" },
                { status: 400 }
            );
        }

        let unit;
        if (utilityType === "ELECTRICITY") unit = "kWh";
        else if (utilityType === "WATER" || utilityType === "GAS") unit = "m³";
        else {
            return Response.json(
                { error: "Invalid utility type" },
                { status: 400 }
            );
        }

        await db.query(
            "INSERT INTO meters (meter_number, status, utility_type, unit) VALUES (?, ?, ?, ?)",
            [meterNumber, status || "ACTIVE", utilityType, unit]
        );

        return Response.json({ message: "Meter added successfully" }, { status: 201 });
    } catch (err) {
        console.error(err);
        return Response.json(
            { error: "Failed to add meter" },
            { status: 500 }
        );
    }
}