import logo from "../assets/logo.png";
import en from "../assets/en.png";
import es from "../assets/es.png";
import "../styles/components/navbar.css";
import { useState, useRef, useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import { motion, easeInOut } from "framer-motion";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState({});

  const menuBtnRef = useRef(null);
  const langBtnRef = useRef(null);

  const { lang, setLang, scrollToSecction, setCurrentPath, currentPath } =
    useContext(LanguageContext);

  const links = [
    {
      anchor: "#home",
      name: lang.navbar.links.home,
      id: 0,
      label: "home",
      path: "/home",
    },
    {
      anchor: "#about",
      name: lang.navbar.links.about,
      id: 1,
      label: "about",
      path: "/about",
    },
    {
      anchor: "#projects",
      name: lang.navbar.links.projects,
      id: 2,
      label: "projects",
      path: "/projects",
    },
    {
      anchor: "#contact",
      name: lang.navbar.links.contact,
      id: 3,
      label: "contact",
      path: "/contact",
    },
  ];

  // navModal mobile

  function handleClick() {
    setNavOpen(!navOpen);
    menuBtnRef.current.classList.toggle("close");
    document.querySelector(".nav").classList.toggle("nav-open");
  }

  // manage language

  function handleLanguage() {
    langBtnRef.current.classList.toggle("show");
  }

  function handleSetLang(flag, lang) {
    setCurrentLang({ flag, lang });
    setLang(lang);
    langBtnRef.current.classList.remove("show");
    handleClick();
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, easings: easeInOut, delay: 0.75 }}
      className="nav">
      <a
        onClick={(e) => {
          e.preventDefault();
          scrollToSecction("home");
        }}
        href="/"
        className="logo-link">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <a
              className={`nav-link ${
                currentPath === link.path ? "active" : ""
              }`}
              href={link.anchor}
              onClick={(e) => {
                e.preventDefault();
                scrollToSecction(link.label);
                handleClick();
                setCurrentPath(link.path);
              }}>
              {link.name}
            </a>
          </li>
        ))}

        <li className="link-lang ">
          <button
            onClick={handleLanguage}
            className="language"
            title="Language">
            <img
              src={!currentLang.flag ? en : currentLang.flag}
              alt="North America flag"
            />
          </button>
          <div className="language-options" ref={langBtnRef}>
            <button className="english" onClick={() => handleSetLang(en, "EN")}>
              <img src={en} alt="North America flag" />
              <span>En</span>
            </button>
            <button className="spanish" onClick={() => handleSetLang(es, "ES")}>
              <img src={es} alt="Spain flag" />
              <span>Es</span>
            </button>
          </div>
        </li>
      </ul>

      <div className="navBtn">
        <button
          onClick={handleClick}
          className="menuBtn"
          ref={menuBtnRef}
          title="Open">
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
