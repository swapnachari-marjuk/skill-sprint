import Link from "next/link";

const ChallengeCard = ({ challenge }) => {
    const { _id, title, category, duration, level, img, description } = challenge;


    return (
        <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
            <img
                src={img}
                alt={title}
                className="w-full h-40 object-cover"
            />

            <div className="p-4 flex flex-col flex-1">
                <span className="text-xs font-medium text-indigo-600 mb-1">
                    {category}
                </span>

                <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                </h3>

                <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-1">
                    {description}
                </p>

                <div className="flex justify-between text-xs text-gray-500 mt-4">
                    <span>{duration}</span>
                    <span>{level}</span>
                </div>

                <Link
                    href={`/challenges/${_id}`}
                    className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:underline"
                >
                    See more →
                </Link>
            </div>
        </div>
    );
};

export default ChallengeCard;
