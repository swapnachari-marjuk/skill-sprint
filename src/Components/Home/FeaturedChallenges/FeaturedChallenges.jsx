import React from 'react';

const FeaturedChallenges = async () => {
    const baseUrl = process.env.FILE_BASE_URL
    const data = await fetch(`${baseUrl}/data.json`)
    const challanges = await data.json()
    const fetured = challanges.slice(0, 3)
    console.log(fetured);
    return (
        <div className='bg-gray-50'>

        </div>
    );
};

export default FeaturedChallenges;