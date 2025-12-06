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
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (value) => {
    setForm({ ...form, role: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New user:", form);
    alert("User added (check console)");
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
              <Label>Username</Label>
              <Input
                name="username"
                placeholder="Enter username"
                value={form.username}
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
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="meter-reader">Meter Reader</SelectItem>
                  <SelectItem value="user">User</SelectItem>
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
