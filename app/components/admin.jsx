"use client";
import React from 'react'

const Admin = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm mb-1">Full Name</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter your full name" />
                </div>
                <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
                </div>
                <div>
                    <label className="block text-sm mb-1">Phone Number</label>
                    <input type="tel" className="w-full p-2 border rounded" placeholder="Enter your phone number" />
                </div>
                <div>
                    <label className="block text-sm mb-1">Admin Access Code</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter admin access code" />
                </div>
            </div>

            <div>
                <label className="block text-sm mb-1">Password</label>
                <input type="password" className="w-full p-2 border rounded" placeholder="Create a password" />
            </div>

            <button type="submit" className="w-full py-3 rounded bg-indigo-600 text-white font-semibold">
                Create Admin Account
            </button>
        </>
    )
}

export default Admin