import { db } from "@/lib/db";

export async function DELETE(req, context) {
    const { id } = await context.params;

    const [result] = await db.query(
        "DELETE FROM users WHERE id = ?",
        [id]
    );

    if (result.affectedRows === 0) {
        return Response.json(
            { error: "User not found" },
            { status: 404 }
        );
    }

    return Response.json({
        message: "User deleted permanently",
    });
}

export async function GET(req,context) {
    const { id } = await context.params;

    const [rows] = await db.query(
        "SELECT id, name, email, phone, nic, role FROM users WHERE id = ?",
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

export async function PUT(req,context) {
  const { id } = await context.params;;
  const { name, email, phone, nic, role } = await req.json();

  const [result] = await db.query(
    "UPDATE users SET name=?, email=?, phone=?, nic=?, role=? WHERE id=?",
    [name, email, phone, nic, role, id]
  );

  if (result.affectedRows === 0) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  return Response.json({ message: "User updated successfully" });
}
