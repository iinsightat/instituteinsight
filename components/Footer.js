export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold">InstituteInsight</h3>
        <p className="text-sm text-gray-300 mt-2">
          © {new Date().getFullYear()} InstituteInsight. All rights reserved.
        </p>

        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-400 text-gray-300 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400 text-gray-300 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-400 text-gray-300 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
