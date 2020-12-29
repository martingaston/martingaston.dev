const { html } = require("htm/preact");

const OtherPosts = () =>
  html`<section class="content afterpost">
    <h6 class="afterpost--title">Keep That Content Train Rolling...</h6>
    <ul class="afterpost--list">
      <li class="afterpost--list-item">
        <time>01 Dec 2020</time><a href="/first-link">One Post</a>
      </li>
      <li class="afterpost--list-item">
        <time>31 Jan 2019</time>
        <a href="/second-link">Second Post</a>
      </li>
    </ul>
  </section>`;

module.exports = { OtherPosts };
