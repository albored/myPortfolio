import "../styles/components/projects.css";
import { Link } from "react-router-dom";
import projectsArr from "../tools/projects";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

function Projects() {
  const { lang } = useContext(LanguageContext);

  return (
    <section className="projects" id="projects">
      <h2 className="project-title">{lang.projectsTitle}</h2>
      <div className="project-container">
        <ul className="project-list">
          {projectsArr.map((item, i) => (
            <li key={i}>
              <figure className="project-img-box">
                <img src={item.img} alt={item.rel} />
                <div className="project-hov">
                  <div>
                    <span>
                      <a
                        className="project-link"
                        aria-label="Link to albored github"
                        href={item.github}
                        title="Github Link"
                        target="_blank">
                        <ion-icon
                          style={{ fontSize: "30px" }}
                          name="logo-github"
                          alt="logo-github"></ion-icon>
                      </a>
                    </span>
                    <span>
                      <a
                        className="project-link"
                        aria-label="Link to albored project"
                        href={item.view}
                        title="Project link"
                        target="_blank">
                        <ion-icon
                          style={{ fontSize: "30px" }}
                          name="eye-outline"></ion-icon>
                      </a>
                    </span>
                  </div>
                  <div className="tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className={`tag ${tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
