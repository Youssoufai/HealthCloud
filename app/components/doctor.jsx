import React from 'react'

const Doctor = () => {
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
                    <label className="block text-sm mb-1">Hospital/Clinic</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter hospital or clinic name" />
                </div>
                <div>
                    <label className="block text-sm mb-1">Specialization</label>
                    <select className="w-full p-2 border rounded">
                        <option>Select specialization</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Pediatrics</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm mb-1">License Number</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter license number" />
                </div>
            </div>

            <div>
                <label className="block text-sm mb-1">Password</label>
                <input type="password" className="w-full p-2 border rounded" placeholder="Create a password" />
            </div>

            <button type="submit" className="w-full py-3 rounded bg-red-400 text-white font-semibold">
                Create Doctor Account
            </button>
        </>
    )
}

export default Doctor