import me from "../assets/me.webp";
import "../styles/components/about.css";
import logos from "../tools/logos";
import courses from "../tools/certificate";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

function About() {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">{lang.aboutTitle}</h2>
        <div className="about-description">
          <div className="about-imgBox">
            <figure>
              <img className="about-img" src={me} alt="Photo of Alvaro C" />
            </figure>

            <p>{lang.aboutMe}</p>
            <span className="line"></span>
          </div>

          <div className="logos-container">
            <div className="logos">
              <h3 className="logos-title">{lang.aboutSkills}</h3>
              <ul className="logos-list">
                {logos.map((logo, i) => (
                  <li key={i} className="logo-item" title={logo.title}>
                    <figure className="logo-imgBox">
                      <img
                        className="logo-img"
                        src={logo.img}
                        alt="programming logo"
                      />
                    </figure>
                  </li>
                ))}
              </ul>
            </div>

            <div className="courses">
              <h3 className="courses">{lang.aboutCourses}</h3>
              <ul className="courses-list">
                {courses.map((img, i) => (
                  <li key={i} className="courses-item">
                    <figure className="course-imgBox">
                      <img
                        className="course-img"
                        src={img}
                        alt="course imagen"
                      />
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
