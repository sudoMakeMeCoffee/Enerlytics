import React from 'react'

const page = () => {
   const  users = [
    { fullName: "John Doe", email: "", phone: "123-456-7890", nic: "987654321V" },
    { fullName: "Jane Smith", email: "", phone: "987-654-3210", nic: "123456789V" },
    { fullName: "Alice Johnson", email: "", phone: "555-123-4567", nic: "456789123V" },
   ];
  return (
    <div className="bg-white shadow-sm border rounded-lg p-6 mt-4 mx-2">
      <h2 className="text-xl font-semibold mb-4">All Users</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Full Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">NIC</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="border-t">
                <td className="p-3 border">{user.fullName}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border">{user.phone}</td>
                <td className="p-3 border">{user.nic}</td>
                <td className="p-3 border">
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded"
                    
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan={5}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page
