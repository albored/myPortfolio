import "../styles/components/home.css";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import { easeInOut, motion } from "framer-motion";

function Home() {
  const { lang, scrollToSecction } = useContext(LanguageContext);

  return (
    <section className="home" id="home">
      <motion.div
        initial={{ translateY: 100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.75, easings: easeInOut }}
        className="info">
        <p>{lang.intro}</p>
        <h1>
          {lang.name} <br />
          <span className="lastName">{lang.lastName}</span>
        </h1>
        <button
          onClick={() => scrollToSecction("contact")}
          className="btn btn-contact">
          {lang.heroBtn}
        </button>
      </motion.div>
    </section>
  );
}

export default Home;
