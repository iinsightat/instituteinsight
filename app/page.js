import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">
          Your Gateway to Global Education 🌍
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Explore universities, compare courses, find scholarships, and plan your study abroad journey — all in one place.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            href="/universities"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Explore Universities
          </Link>

          <Link
            href="/courses"
            className="px-6 py-3 bg-slate-900 text-white rounded-lg shadow hover:bg-slate-700"
          >
            Browse Courses
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link
            href="/scholarships"
            className="p-6 rounded-lg border hover:shadow"
          >
            🎓 Scholarships
          </Link>

          <Link href="/compare" className="p-6 rounded-lg border hover:shadow">
            ⚖️ Compare Universities
          </Link>

          <Link
            href="/blog"
            className="p-6 rounded-lg border hover:shadow"
          >
            📰 Knowledge Hub
          </Link>
        </div>
      </section>
    </div>
  );
}
