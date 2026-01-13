import React from 'react';

const loading = () => {
    return (
        <div className='bg-gray-50'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 max-w-6xl mx-auto'>
                {
                    [...Array(9)].map((_, i) =>
                        <div key={i} className="border border-gray-200 rounded-2xl p-0 overflow-hidden shadow-sm animate-pulse bg-white w-full max-w-sm">
                            {/* ইমেজ সেকশন (উপরের গ্রে অংশ) */}
                            <div className="bg-gray-300 h-48 w-full"></div>

                            {/* কন্টেন্ট সেকশন */}
                            <div className="p-5 space-y-4">
                                {/* ক্যাটাগরি (Programming/Design) */}
                                <div className="h-3 bg-gray-300 rounded w-1/4"></div>

                                {/* টাইটেল (JavaScript Basics) */}
                                <div className="h-6 bg-gray-300 rounded w-3/4"></div>

                                {/* ডেসক্রিপশন (৩টি লাইন) */}
                                <div className="space-y-2">
                                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                                </div>

                                {/* নিচের ইনফো (Days & Level) */}
                                <div className="flex justify-between items-center pt-2">
                                    <div className="h-3 bg-gray-200 rounded w-1/5"></div>
                                    <div className="h-3 bg-gray-200 rounded w-1/5"></div>
                                </div>

                                {/* See More লিঙ্ক */}
                                <div className="h-4 bg-gray-300 rounded w-1/3 mt-2"></div>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default loading;