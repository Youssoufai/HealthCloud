import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from './Button'
import Input from './input'


export default function Signup() {
    return (
        <motion.div
            className="min-h-screen flex items-center justify-center bg-white px-4 py-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <form className="w-full max-w-4xl bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left side inputs */}
                <div className="flex flex-col space-y-4">
                    <Input label="Facility Name" placeholder="Enter facility name" />
                    <Input label="Phone" placeholder="Enter facility phone" />
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Facility Type</label>
                        <div className="relative">
                            <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none appearance-none">
                                <option>Select facility type</option>
                                <option>Hospital</option>
                                <option>Clinic</option>
                                <option>Rehab</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <Input label="Admin Email" placeholder="Enter admin email" />
                    <Input label="Password" type="password" placeholder="Create a password" />
                </div>

                {/* Right side inputs */}
                <div className="flex flex-col space-y-4">
                    <Input label="Facility Email" placeholder="Enter facility email" />
                    <Input label="Address" placeholder="Enter facility address" />
                    <Input label="Admin Name" placeholder="Enter admin name" />
                    <Input label="Admin Phone" placeholder="Enter admin phone" />
                </div>

                {/* Submit */}
                <div className="col-span-2">
                    <Button className="w-full text-lg">Create Account</Button>
                    <p className="text-center text-sm mt-3">
                        Already have an account?{' '}
                        <a href="/login" className="text-green-600 hover:underline">Login</a>
                    </p>
                </div>
            </form>
        </motion.div>
    )
}
