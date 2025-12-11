import{db} from "@/lib/db";

export async function GET(){
    try{
        const [rows] =await db.query("SELECT id,name,email,role,phone,nic,created_at FROM users ORDER BY created_at DESC");
        return Response.json(rows,{status:200});
    }catch(error){
        return Response.json({error:error.message},{status:500});
    }
}