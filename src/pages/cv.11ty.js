const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");
const { format } = require("date-fns");
const { Content } = require("../components/Content");

const formatCvDate = (start, end) => {
  const pattern = "MMMM yyyy";
  return `${format(start, pattern)} - ${
    end ? format(end, pattern) : "Present"
  }`;
};

const sortExperienceByStartDate = (experience) =>
  experience.sort((a, b) => {
    if (a.data.start && b.data.start) {
      return b.data.start - a.data.start;
    }

    return 0;
  });

exports.data = {
  layout: "base",
  title: "CV",
  permalink: "cv/index.html",
  tags: "nav",
  navorder: 5,
};

exports.render = function ({ author, collections }) {
  const { bio, skills, education, projects } = collections.cv[0].data;
  const experience = collections.cvExperience;

  return render(html`<article class="cv">
    <header class="cv__header">
      <h1 class="cv__header-mainheading">${author.name}</h1>
      <h2 class="cv__header-subheading">
        <a class="cv__link" href="mailto:${author.email}"> ${author.email} </a>
      </h2>
    </header>
    <section class="cv__section cv__section--bio stack-large">
      <h4 class="cv__title short-underline">Summary</h4>
      <p>${bio}</p>
    </section>
    <section class="cv__section cv__section--experience stack-large">
      <h4 class="cv__title short-underline">Experience</h4>
      ${sortExperienceByStartDate(experience).map(
        (position) =>
          html`<div class="cv__section stack-large">
            <div class="two-column-if-medium">
              <div>
                <h6>${position.data.title}</h6>
                <h6>${position.data.organisation}</h6>
              </div>
              <div class="two-column-if-medium--right">
                <h6 class="cv__secondary-info">
                  ${formatCvDate(position.data.start, position.data.end)}
                </h6>
                <h6 class="cv__secondary-info no-mobile">
                  ${position.data.location}
                </h6>
              </div>
            </div>
            <${Content}
              element="div"
              classes="cv__markdown"
              content=${position.templateContent}
            />
          </div> `
      )}
    </section>
    <section class="cv__section cv__section--aside stack-large">
      <h4 class="cv__title short-underline">Projects</h4>
      <ul class="cv__project-list stack-small">
        ${projects.map(
          (project) => html`
            <li class="cv__project-list-item stack-small">
              <h6 class="cv__project-heading">
                <a class="cv__link" href=${project.url}>${project.title}</a>
              </h6>
              <p>${project.description}</p>
            </li>
          `
        )}
      </ul>
      <h4 class="cv__title short-underline">Skills</h4>
      <ul class="cv__project-list">
        ${skills.map(
          (skill) => html`<li class="cv__project-list-item">${skill}</li>`
        )}
      </ul>
      <h4 class="cv__title short-underline">Education</h4>
      <ul class="cv__project-list">
        <li class="cv__project-list-item">
          <h6 class="cv__project-heading">${education.institution}</h6>
          <p>${education.qualification}</p>
        </li>
      </ul>
    </section>
  </article>`);
};
