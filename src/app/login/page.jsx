  "use client";
  import { use, useState } from "react";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { motion } from "framer-motion";

  export default function LoginPage() {
    const [form, setForm] = useState({
      email: "",
      password: "",
    });

    function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
      e.preventDefault();
      const response = await fetch("/api/auth/login",{method:"POST",body:JSON.stringify(form)});
      const data =await response.json();

      if(response.ok){
        document.cookie = `token=${data.token}; path=/`;

        if(data.role==="ADMIN"){
          window.location.href = "/dashboard/admin";
        }
        else if(data.role==="MANAGER"){
          window.location.href = "/dashboard/manager";
        }
        else if(data.role==="ADMIN_STAFF"){
          window.location.href = "/dashboard/admin-staff";
        }
        else if(data.role==="CASHIER"){
          window.location.href = "/dashboard/cashier";
        }
        else if(data.role==="METER_READER"){
          window.location.href = "/dashboard/meter-reader";
        }else{
          alert("Unknown role");
        }
      }
      else{
        alert(data.errori ||"Login failed");
      }
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold">Enerlytics – Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <Button type="submit" className="w-full rounded-xl py-2 text-base">
                  Login 
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }
