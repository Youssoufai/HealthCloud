"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function CallToAction() {
    return (
        <>
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
                        <p className="bg-white text-teal-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
                            Register
                        </p>
                    </Link>
                    <Link href="#create-account">
                        <p className="border border-white text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-teal-600 transition">
                            Create an Account
                        </p>
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 text-white py-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                    <div>
                        <h3 className="text-lg font-bold mb-2">HealthCloud</h3>
                        <p className="mb-4">HealthCloud — Empowering Global Healthcare</p>
                        <div className="flex space-x-4">
                            <FaFacebookF className="hover:text-teal-400 cursor-pointer" />
                            <FaTwitter className="hover:text-teal-400 cursor-pointer" />
                            <FaLinkedinIn className="hover:text-teal-400 cursor-pointer" />
                            <FaInstagram className="hover:text-teal-400 cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Company</h4>
                        <ul className="space-y-1">
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">News</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Resources</h4>
                        <ul className="space-y-1">
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Help Center</Link></li>
                            <li><Link href="#">Case Studies</Link></li>
                            <li><Link href="#">Webinars</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Legal</h4>
                        <ul className="space-y-1">
                            <li><Link href="#">Terms of Service</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">HIPAA Compliance</Link></li>
                            <li><Link href="#">Security</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-xs mt-8 text-gray-400">
                    © 2023 HealthCloud. All rights reserved.
                </div>
            </footer>
        </>
    );
}
