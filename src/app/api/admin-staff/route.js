import { db } from "@/lib/db";

export async function GET() {
    try {
        const [[customers]] = await db.query(
            "SELECT COUNT(*) AS count FROM customers"
        );

        const [[meters]] = await db.query(
            "SELECT COUNT(*) AS count FROM meters"
        );

        const [[readers]] = await db.query(
            "SELECT COUNT(*) AS count FROM users WHERE role = 'METER_READER'"
        );

        return Response.json(
            {
                customers: customers.count,
                meters: meters.count,
                meterReaders: readers.count,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return Response.json(
            { error: "Failed to load dashboard stats" },
            { status: 500 }
        );
    }
}
