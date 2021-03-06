const { html } = require("htm/preact");
const { format } = require("date-fns");
const readingTime = require("reading-time");

const { Tags } = require("./Tags");

const Info = ({ date, content, tags }) =>
  html`<div class="main--post-info">
    <h6 class="main--post-info-date">
      ${format(date, "MMMM dd, y")} ○ ${readingTime(content).text}
    </h6>
    <${Tags} tags=${tags} />
  </div>`;

module.exports = { Info };
