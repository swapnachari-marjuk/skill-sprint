import React from 'react';
import Link from "next/link";

const Hero = () => {
    return (
        <section className="bg-linear-to-b from-indigo-50 to-white">
            <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Upgrade Your Skills <br />
                        <span className="text-indigo-600">in Just 7 Days</span>
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg max-w-md">
                        Short, focused challenges designed to help you learn, practice,
                        and improve one skill at a time — without overwhelm.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            href="/challenges"
                            className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                        >
                            Explore Challenges
                        </Link>

                        <Link
                            href="/#how-it-works"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            How it works →
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-gray-500">
                        ✔ Beginner-friendly &nbsp; ✔ No sign-up required &nbsp; ✔ Free challenges
                    </p>
                </div>

                {/* Right Visual */}
                <div className="relative">
                    <div className="rounded-xl bg-white shadow-lg p-6 border border-gray-100">
                        <h3 className="font-semibold text-gray-900">
                            7-Day JavaScript Basics
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Daily bite-sized tasks to build strong fundamentals
                        </p>

                        <div className="mt-4 space-y-2">
                            <div className="h-2 bg-indigo-100 rounded">
                                <div className="h-2 w-2/3 bg-indigo-600 rounded"></div>
                            </div>
                            <p className="text-xs text-gray-500">
                                Day 5 of 7 completed
                            </p>
                        </div>
                    </div>

                    {/* Decorative blur */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
