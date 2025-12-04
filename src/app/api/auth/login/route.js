import {db} from '@/lib/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try{
        const{email,password}=await request.json();
        const [rows]=await db.query('SELECT * FROM users WHERE email=?',[email]); 
        if (rows.length === 0){
            return Response.json({error:"User not found"}, {status:404});

        }
        const user =rows[0];
        const valid =await bcrypt.compare(password,user.password);
        if (!valid){
            return Response.json({error:"Invalid password"}, {status:401});
        }
        
        const token =jwt.sign({id:user.id,email:user.email,role:user.role} ,process.env.JWT_SECRET,{expiresIn:'1d'});
        return Response.json({token,role:user.role});

    }catch(error){
        return Response.json({error:error.message},{status:500}); 
    }
}