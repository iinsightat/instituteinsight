import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          InstituteInsight
        </Link>

        <div className="flex gap-6 text-slate-700">
          <Link href="/universities">Universities</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/scholarships">Scholarships</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
