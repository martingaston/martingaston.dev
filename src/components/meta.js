const createStructuredData = (data) => {
  if (data.layout === "blog") {
    return createPostStructuredData({
      url: data.site.url + data.page.url,
      headline: data.title,
      description: data.page.excerpt,
      author: data.author.name,
      image: "",
      datePublished: data.page.date,
    });
  }

  return createWebsiteStructureData({
    author: data.author.name,
    bio: "",
    url: data.site.url,
    image: `${data.site.url}/assets/mg-gb.png`,
    websiteName: data.site.name,
    twitterUrl: data.author.social.twitter.url,
    githubUrl: data.author.social.github.url,
    linkedInUrl: data.author.social.linkedin.url,
  });
};

const createPostStructuredData = ({
  url,
  headline,
  description,
  author,
  image,
  datePublished,
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

module.exports = { createStructuredData };
