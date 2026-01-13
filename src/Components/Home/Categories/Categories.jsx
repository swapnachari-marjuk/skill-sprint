import Link from "next/link";

const categories = [
  { name: "Programming", href: "/challenges?category=Programming" },
  { name: "Design", href: "/challenges?category=Design" },
  { name: "Productivity", href: "/challenges?category=Productivity" },
  { name: "Fitness", href: "/challenges?category=Fitness" },
  { name: "Communication", href: "/challenges?category=Communication" },
];

const Categories = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Explore Categories</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose a category and explore challenges to improve your skills.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition flex items-center justify-center font-medium text-gray-900 hover:text-indigo-600"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
