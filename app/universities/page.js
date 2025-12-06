import UniversityCard from "@/components/UniversityCard";
import SearchBox from "@/components/SearchBox";

async function getUniversities() {
  const res = await fetch("https://raw.githubusercontent.com/iinsightat/instituteinsight/main/data/universities.json", {
    cache: "no-store",
  });
  return res.json();
}

export default async function UniversitiesPage({ searchParams }) {
  const data = await getUniversities();
  const query = searchParams?.q?.toLowerCase() || "";

  const filtered = data.filter((u) =>
    u.name.toLowerCase().includes(query) ||
    u.country.toLowerCase().includes(query) ||
    u.category.toLowerCase().includes(query)
  );

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Explore Universities</h1>

      <SearchBox />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filtered.map((u) => (
          <UniversityCard key={u.id} uni={u} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">No universities found.</p>
      )}
    </main>
  );
}
