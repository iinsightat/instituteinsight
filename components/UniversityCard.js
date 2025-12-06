import Link from "next/link";

export default function UniversityCard({ uni }) {
  return (
    <Link href={`/universities/${uni.id}`} className="block p-4 border rounded-lg hover:shadow">
      <h3 className="font-bold text-lg">{uni.name}</h3>
      <p className="text-sm text-slate-600 mt-2">{uni.country}</p>
    </Link>
  );
}
