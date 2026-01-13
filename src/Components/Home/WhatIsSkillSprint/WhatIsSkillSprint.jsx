import React from 'react';

const WhatIsSkillSprint = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-gray-900">
                    What is SkillSprint?
                </h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    SkillSprint is a collection of short, focused challenges designed
                    to help you improve one skill at a time — without long courses
                    or unnecessary pressure.
                </p>

                {/* Feature Cards */}
                <div className="mt-12 grid gap-8 md:grid-cols-3">

                    <div className="p-6 border border-gray-200 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Short Challenges
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Each challenge is designed to be completed in just 7 days,
                            so you always know the finish line.
                        </p>
                    </div>

                    <div className="p-6 border border-gray-200 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Clear Daily Tasks
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            No guessing. Every day comes with a clear, focused task
                            to help you make real progress.
                        </p>
                    </div>

                    <div className="p-6 border border-gray-200 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Beginner-Friendly
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Challenges are designed with beginners in mind, so you
                            can start even if you’re new.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatIsSkillSprint;
