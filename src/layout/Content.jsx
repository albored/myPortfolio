import Header from "../layout/Header";
import About from "../components/About";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion, easeInOut } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/languageContext";

function Content() {
  const { setCurrentPath } = useContext(LanguageContext);
  const [testId, setTestId] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const callback = function (entries) {
      entries.forEach((entrie) => {
        const id = `/${entrie.target.id}`;
        if (entrie.isIntersecting) {
          setTestId(id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((sec) => {
      observer.observe(sec);
    });
  }, []);

  useEffect(() => {
    setCurrentPath(testId);
  }, [testId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, easings: easeInOut }}
      className="app">
      <main className="content">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </motion.div>
  );
}

export default Content;
