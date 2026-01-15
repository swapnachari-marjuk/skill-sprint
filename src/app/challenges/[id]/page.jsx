import React from 'react';

const ChallangeDetails = async ({ params }) => {
    const { id } = await params;
    const baseUrl = process.env.FILE_BASE_URL
    const response = await fetch(`${baseUrl}/challenges/${id}`);
    const challange = await response.json();
    console.log(challange);

    return (
        <div className='bg-gray-50 py-10'>
            <div className="max-w-5xl lg:mx-auto px-4 py-10 bg-white rounded-xl mx-4 shadow-sm">
                {/* Image */}
                <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                    <img
                        src={challange.img}
                        alt={challange.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">
                        {challange.category}
                    </span>
                    <span>{challange.duration}</span>
                    <span>{challange.level}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {challange.title}
                </h1>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    {challange.description}
                </p>

                {/* CTA */}
                <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Start This Challenge
                </button>
            </div>
        </div>
    );
};

export default ChallangeDetails;


