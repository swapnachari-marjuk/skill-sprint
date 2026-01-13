import React from 'react';

const HowItWorks = () => {

    const steps = [
        {
            title: "Choose a Challenge",
            description:
                "Pick a short challenge that fits your skill level and interests.",
        },
        {
            title: "Follow Daily Tasks",
            description:
                "Complete small, focused tasks each day to make steady progress.",
        },
        {
            title: "Track Progress",
            description:
                "Check off completed days and watch your skills grow step by step.",
        },
    ];

    return (
        <section id='how-it-works' className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Follow these simple steps to start improving your skills with SkillSprint.
                </p>

                {/* Steps */}
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="p-6 bg-indigo-50 rounded-lg border border-indigo-100 flex flex-col items-center"
                        >
                            {/* Step number circle */}
                            <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold mb-4">
                                {index + 1}
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 text-center">
                                {step.title}
                            </h3>

                            <p className="mt-2 text-gray-600 text-center text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
