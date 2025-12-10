"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";


export default function AddUserForm() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    nic: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (value) => {
    setForm({ ...form, role: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response =await fetch("/api/admin/add-user",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(form)
    });

    const data =await response.json();

    if(response.ok){
      alert("User added successfully!");
      setForm({fullname:"",email:"", password: "", role: "", phone: "", nic: "",});
    }else{
      alert(data.error || "Error adding user");
    }   
  };

  return (
    <div className="p-6">
      <Card className="max-w-xl shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Add New User
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="space-y-1">
              <Label>Full Name</Label>
              <Input
                name="fullname"
                placeholder="Enter full name"
                value={form.fullname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1">
              <Label>Phone Number</Label>
              <Input
                name="phone"
                placeholder="07XXXXXXXX"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1">
              <Label>NIC</Label>
              <Input
                name="nic"
                placeholder="Enter NIC Number"
                value={form.nic}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1">
              <Label>Role</Label>
              <Select onValueChange={handleRoleChange} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN_STAFF">Admin Staff</SelectItem>
                  <SelectItem value="Manager">Manager</SelectItem>
                  <SelectItem value="METER_READER">Meter Reader</SelectItem>
                  <SelectItem value="CASHIER">Billing Clerk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full mt-4">
              Add User
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
