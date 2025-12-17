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
