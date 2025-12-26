import { db } from "@/lib/db";

export async function POST(req) {
    const connection = await db.getConnection();

    try {
        const { meterId, customerId } = await req.json();

        if (!meterId || !customerId) {
            return Response.json(
                { error: "Meter and Customer are required" },
                { status: 400 }
            );
        }

        await connection.beginTransaction();

        // Unassign previous customer (if any)
        await connection.query(
            `UPDATE meter_customer_assignments
       SET unassigned_at = NOW()
       WHERE meter_id = ? AND unassigned_at IS NULL`,
            [meterId]
        );

        // Assign new customer
        await connection.query(
            `INSERT INTO meter_customer_assignments (meter_id, customer_id)
       VALUES (?, ?)`,
            [meterId, customerId]
        );

        await connection.commit();

        return Response.json(
            { message: "Meter assigned to customer" },
            { status: 201 }
        );

    } catch (err) {
        await connection.rollback();
        console.error(err);

        return Response.json(
            { error: "Failed to assign meter" },
            { status: 500 }
        );
    } finally {
        connection.release();
    }
}
