export default function UniversityCard({ uni }) {
  return (
    <div className="border rounded-lg shadow p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{uni.name}</h2>

      <p className="text-sm text-gray-600">
        <strong>Country:</strong> {uni.country}
      </p>

      <p className="text-sm text-gray-600">
        <strong>Category:</strong> {uni.category}
      </p>

      {uni.ranking && (
        <p className="text-sm mt-2">
          <strong>Ranking:</strong> {uni.ranking}
        </p>
      )}

      {uni.website && (
        <a
          href={uni.website}
          target="_blank"
          className="inline-block mt-3 text-blue-600 underline text-sm"
        >
          Visit Website
        </a>
      )}
    </div>
  );
}
