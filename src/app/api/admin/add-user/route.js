import { db } from "@/lib/db";
import bcrypt from 'bcryptjs';

export async function POST(request) {
    try {
        const { fullname, email, password, phone, nic, role, } = await request.json();
        if (!fullname || !email || !password || !role) {
            return Response.json(
                { error: "Fullname, email, password, and role are required" },
                { status: 400 }
            );
        }

        const [existing] = await db.query(
            "SELECT * FROM users WHERE email = ?", [email]
        );

        if (existing.length > 0) {
            return Response.json(
                { error: "Email is already exists" },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.query(
            "INSERT INTO users (name, email, password, role, phone, nic) VALUES (?, ?, ?, ?, ?, ?)",
            [fullname, email, hashedPassword, role, phone || null, nic || null]
        );

        return Response.json({ message: "User added Successfully" }, { status: 201 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }

}