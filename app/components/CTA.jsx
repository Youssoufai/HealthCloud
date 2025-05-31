"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="bg-teal-600 text-white py-16 px-6 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold mb-4"
            >
                Ready to Transform Healthcare Delivery?
            </motion.h2>
            <p className="mb-8 max-w-xl mx-auto">
                Join thousands of healthcare providers and millions of patients on the HealthCloud platform.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
                <Link href="#register-hospital">
                    <a className="bg-white text-teal-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
                        Register Your Hospital
                    </a>
                </Link>
                <Link href="#create-account">
                    <a className="border border-white text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-teal-600 transition">
                        Create Patient Account
                    </a>
                </Link>
            </div>
        </section>
    );
}
