'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="#">
                            <span className="text-teal-600 font-bold text-lg flex items-center">
                                {/* Replace with your logo icon */}
                                <span className="mr-2">ⓞ</span>
                                HealthCloud
                            </span>
                        </Link>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex space-x-6 text-sm text-gray-700">
                        <Link href="#">Home</Link>
                        <Link href="#">Features</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">FAQs</Link>
                        <Link href="#">Contact</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <Link href="#" className="text-teal-600 text-sm font-medium">
                            Login
                        </Link>
                        <Link
                            href="#"
                            className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-md"
                        >
                            Register Your Hospital
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
