import Link from 'next/link';
import React from 'react';

const Cta = () => {
    return <section className="bg-indigo-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
            Start Your First Challenge Today
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-indigo-100">
            Join SkillSprint and begin improving your skills step by step.
        </p>
        <Link
            href="/challenges"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 transition"
        >
            Explore Challenges
        </Link>
    </section>
};

export default Cta;