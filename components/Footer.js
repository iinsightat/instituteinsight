export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} InstituteInsight. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
