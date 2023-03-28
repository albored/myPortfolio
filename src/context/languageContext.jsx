import { createContext, useState } from "react";
import language from "../Language";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const [lang, setLang] = useState(language.EN);
  const [currentPath, setCurrentPath] = useState("/home");

  function setLanguage(lang) {
    setLang(language[lang]);
  }
  // scroll
  function scrollToSecction(label) {
    document.getElementById(`${label}`).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        currentPath,
        setLang: setLanguage,
        scrollToSecction,
        setCurrentPath,
      }}>
      {children}
    </LanguageContext.Provider>
  );
}
