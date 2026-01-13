import React from 'react';

const WhySkillSprint = () => {

    const benefits = [
        {
            title: "Fast Learning",
            description:
                "Complete challenges in just 7 days and see tangible progress quickly.",
            icon: (
                <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2v20M5 12h14" />
                </svg>
            ),
        },
        {
            title: "Focused Tasks",
            description:
                "Daily tasks are small and specific, so you never feel overwhelmed.",
            icon: (
                <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                </svg>
            ),
        },
        {
            title: "Beginner Friendly",
            description:
                "No prior experience needed. Start improving today, step by step.",
            icon: (
                <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 12l2-2 4 4 8-8 4 4 2-2" />
                </svg>
            ),
        },
        {
            title: "Track Progress",
            description:
                "Easily monitor completed days and see your improvement over time.",
            icon: (
                <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 13l4 4L19 7" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-900">Why SkillSprint</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    SkillSprint is designed to help you learn effectively, stay focused, and track your growth every step of the way.
                </p>

                {/* Benefits Grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow hover:shadow-md transition"
                        >
                            <div className="mb-4">{benefit.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {benefit.title}
                            </h3>
                            <p className="mt-2 text-gray-600 text-sm">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySkillSprint;
