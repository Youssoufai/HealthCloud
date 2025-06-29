import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from './Button'
import Input from './input'

export default function Pharmacy() {
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
                    <Input label="Pharmacy Name" placeholder="Enter pharmacy name" />
                    <Input label="Email" placeholder="Enter pharmacy email" />
                    <Input label="Phone" placeholder="Enter pharmacy phone" />
                    <Input label="Address" placeholder="Enter pharmacy address" />
                    <Input label="Regulatory/Pharmacist Council ID" placeholder="Enter regulatory ID" />
                </div>

                {/* Right side inputs */}
                <div className="flex flex-col space-y-4">
                    <Input label="Contact Person Name" placeholder="Enter contact person name" />
                    <Input label="Contact Phone" placeholder="Enter contact phone" />
                    <Input label="Password" type="password" placeholder="Create a password" />
                </div>

                {/* Submit */}
                <div className="col-span-2">
                    <Button className="w-full text-lg bg-red-500">Create Pharmacy Account</Button>
                    <p className="text-center text-sm mt-3">
                        Already have an account?{' '}
                        <a href="/login" className="text-green-600 hover:underline">Login</a>
                    </p>
                </div>
            </form>
        </motion.div>
    )
}
