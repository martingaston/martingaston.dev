const createPostStructuredData = ({
  url,
  headline,
  description,
  author,
  image,
  datePublished,
  dateModified,
}) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline,
    description,
    image,
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    dateModified,
  });

const createWebsiteStructureData = ({
  author,
  bio,
  url,
  image,
  websiteName,
  twitterUrl,
  githubUrl,
  linkedInUrl,
}) =>
  JSON.stringify({
    name: author,
    description: bio,
    author: {
      "@type": "Person",
      name: author,
    },
    "@type": "WebSite",
    url: url,
    image: image,
    headline: websiteName,
    sameAs: [twitterUrl, githubUrl, linkedInUrl],
    "@context": "http://schema.org",
  });

module.exports = { createPostStructuredData, createWebsiteStructureData };
