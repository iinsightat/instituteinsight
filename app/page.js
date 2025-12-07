import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-14">

      {/* HERO SECTION */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-700">
          Discover the Best Universities Across the World
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Your trusted guide to global education. Explore universities, courses,
          admission processes, scholarships, and more.
        </p>

        <div className="mt-6">
          <Link
            href="/universities"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Universities
          </Link>
        </div>
      </section>

      {/* FEATURE BOXES */}
      <section className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="card text-center">
          <h3 className="text-xl font-semibold">🌍 Global Universities</h3>
          <p className="mt-2 text-gray-600">
            Browse institutions from 50+ countries with key insights.
          </p>
        </div>

        <div className="card text-center">
          <h3 className="text-xl font-semibold">📚 Courses Directory</h3>
          <p className="mt-2 text-gray-600">
            Compare programs, fields of study, and career outcomes.
          </p>
        </div>

        <div className="card text-center">
          <h3 className="text-xl font-semibold">🎓 Study Abroad Guidance</h3>
          <p className="mt-2 text-gray-600">
            Get information on visas, fees, applications, and scholarships.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold">Start Your Global Education Journey</h2>
        <p className="text-gray-700 mt-3">
          InstituteInsight helps you find the right university—anywhere in the world.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}

      </section>
    </div>
  );
}
