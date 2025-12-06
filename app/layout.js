export const metadata = {
  title: "InstituteInsight – Compare Universities, Courses & Scholarships Worldwide",
  description: "InstituteInsight helps students explore international universities, compare courses, find scholarships, and get application guidance.",
};

import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
