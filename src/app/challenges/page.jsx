import ChallengeCard from '@/Components/Cards/ChallengeCard';
import React from 'react';

const Challanges = async () => {
    const baseUrl = process.env.FILE_BASE_URL
    const response = await fetch(`${baseUrl}/data.json`);
    const challanges = await response.json();
    console.log({ challanges, message: "fetched data successfully." });

    return (
        <div className='bg-gray-50 py-10 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 max-w-6xl mx-auto md:px-6'>
                {challanges.map(challange => <ChallengeCard key={challange.id} challenge={challange} />)}
            </div>
        </div>
    );
};

export default Challanges;