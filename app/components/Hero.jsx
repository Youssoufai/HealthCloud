'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Your Global Digital Health Companion
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg">
                        Whether you're a hospital looking to modernize care or a patient accessing health from anywhere — HealthCloud connects you to what matters most.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Link href="/register-hospital">
                            <span className="inline-block bg-teal-600 text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-teal-700 transition">
                                Register
                            </span>
                        </Link>
                        <Link href="/book-demo">
                            <span className="inline-block border border-teal-600 text-teal-600 text-sm font-semibold px-5 py-2 rounded-md hover:bg-teal-50 transition">
                                Book a Demo
                            </span>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    className="flex justify-center"
                >
                    <Image
                        src="/images/banner.jpg" // Place your image in public/hero.png
                        alt="Doctors with tech"
                        width={500}
                        height={500}
                        className="rounded-xl shadow-md"
                    />
                </motion.div>
            </div>
        </section>
    );
}
