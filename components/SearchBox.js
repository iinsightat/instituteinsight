export default function SearchBox({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search universities..."
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 rounded-lg border mb-6"
    />
  );
}
