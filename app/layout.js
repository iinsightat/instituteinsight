import "./../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultSEO, generateSEOTags } from "@/lib/seo";

export const metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{generateSEOTags({})}</head>

      <body>
        <Header />

        <main className="min-h-screen container">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
