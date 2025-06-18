"use client";
import React from 'react'

const Patient = () => {
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
                    <label className="block text-sm mb-1">Date of Birth</label>
                    <input type="date" className="w-full p-2 border rounded" />
                </div>
            </div>

            <div>
                <label className="block text-sm mb-1">Password</label>
                <input type="password" className="w-full p-2 border rounded" placeholder="Create a password" />
            </div>

            <button type="submit" className="w-full py-3 rounded bg-teal-500 text-white font-semibold">
                Create Patient Account
            </button>
        </>
    )
}

export default Patient