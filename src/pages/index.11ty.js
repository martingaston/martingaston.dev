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
  [...data.collections.blog]
    .reverse()
    .filter((post) => post.data.page.url != data.page.url)
    .slice(0, numberOfPosts);

exports.render = function (data) {
  return render(html`<section class="featured">
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
