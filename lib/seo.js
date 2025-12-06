export const defaultSEO = {
  title: "InstituteInsight — Global University Search",
  description:
    "Explore universities across the world with InstituteInsight — your guide to international education, courses, admissions and global study options.",
  keywords:
    "international education, study abroad, foreign universities, global degrees, overseas admission, institute insight",
  author: "InstituteInsight",
};

export function generateSEOTags({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
}) {
  return (
    <>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>

      {/* Social tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
