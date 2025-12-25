import { db } from "@/lib/db";

export async function DELETE(req, context) {
    const { id } = await context.params;

    const [result] = await db.query(
        "DELETE FROM customers WHERE id = ?",
        [id]
    );

    if (result.affectedRows === 0) {
        return Response.json(
            { error: "Customer not found" },
            { status: 404 }
        );
    }

    return Response.json({
        message: "Customer deleted permanently",
    });
}

export async function GET(req, context) {
    const { id } = await context.params;

    const [rows] = await db.query(
        "SELECT id, name, email, phone, nic FROM customers WHERE id = ?",
        [id]
    );

    if (rows.length === 0) {
        return Response.json(
            { error: "User not found" },
            { status: 404 }
        );
    }

    return Response.json(rows[0]);
}

export async function PUT(req, context) {
    const { id } = await context.params;;
    const { name, email, phone, nic } = await req.json();

    const [result] = await db.query(
        "UPDATE customers SET name=?, email=?, phone=?, nic=? WHERE id=?",
        [name, email, phone, nic, id]
    );

    if (result.affectedRows === 0) {
        return Response.json({ error: "Customer not found" }, { status: 404 });
    }

    return Response.json({ message: "Customer updated successfully" });
}
