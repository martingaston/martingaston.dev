const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");
const { formatDistanceToNow } = require("date-fns");

exports.data = {
  layout: "base",
  title: "Home",
  permalink: "index.html",
  tags: "nav",
  navorder: 1,
};

const getLatestPosts = (data, numberOfPosts = 5) =>
  [...data.collections.blog.all]
    .reverse()
    .filter((post) => post.data.page.url != data.page.url)
    .slice(0, numberOfPosts);

exports.render = function ({ author, ...data }) {
  return render(html` <header class="hero">
      <img class="hero__image" src="/assets/mg-gb.png" />
      <div class="hero__content">
        <h1 class="hero__title">Hello, World!</h1>
        <p>
          I'm a senior engineer working in London at ${" "}<a
            class="hero__link"
            href=${author.employer.url}
            >${author.employer.name}</a
          >, a super nifty software consultancy. You can also reach me on${" "}
          <a class="hero__link" href=${author.social.twitter.url}>Twitter</a
          >,${" "}
          <a class="hero__link" href=${author.social.github.url}>GitHub</a>
          ${" or "}
          <a class="hero__link" href="mailto:${author.email}">
            ${author.email}
          </a>
        </p>
      </div>
    </header>
    <section class="featured">
      <h3 class="featured__title">Latest Posts</h3>
      <ul class="featured-list">
        ${getLatestPosts(data, 3).map(
          (post) => html`
            <li class="featured-list__item">
              <h5 class="featured-list__title">
                <a class="featured-list__link" href=${post.data.page.url}>
                  ${post.data.title}
                </a>
              </h5>
              <time class="featured-list__timestamp">
                ${formatDistanceToNow(post.data.page.date)} ago
              </time>
            </li>
          `
        )}
      </ul>
      <div class="featured-moreposts">
        <h4 class="featured-moreposts__title">
          <a class="featured-moreposts__link" href="/blog/">All Posts</a>
        </h4>
      </div>
    </section>`);
};
