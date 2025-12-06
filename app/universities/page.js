import UniversityCard from "../../components/UniversityCard";

const dummyData = [
  { id: 1, name: "Harvard University", country: "USA" },
  { id: 2, name: "University of Oxford", country: "UK" },
  { id: 3, name: "University of Toronto", country: "Canada" }
];

export default function UniversitiesPage() {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Universities</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyData.map((uni) => (
          <UniversityCard key={uni.id} uni={uni} />
        ))}
      </div>
    </div>
  );
}
