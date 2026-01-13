import React from 'react';
import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold text-gray-900"
                >
                    Skill<span className="text-indigo-600">Sprint</span>
                </Link>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/" className="hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/challenges" className="hover:text-gray-900">
                        Challenges
                    </Link>
                    <Link href="#how-it-works" className="hover:text-gray-900">
                        How It Works
                    </Link>
                    <Link href="/about" className="hover:text-gray-900">
                        About
                    </Link>

                    {/* CTA */}
                    <Link
                        href="/challenges"
                        className="ml-4 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                        Explore
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
