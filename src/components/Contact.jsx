import "../styles/components/contact.css";
import { Link } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { LanguageContext } from "../context/languageContext";
import { validation, formError } from "../tools/formSubmit";

function Contact() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const { lang } = useContext(LanguageContext);

  const fetchForm = async function (formdata) {
    setIsDisabled(true);
    const res = await fetch(
      "https://formsubmit.co/ajax/9eef3bce5947c9b95f1e0eadd25e6ee9",
      {
        method: "POST",
        body: formdata,
      }
    );

    await res.json();

    if (res.ok) {
      document.querySelectorAll(".form-input").forEach((el) => (el.value = ""));
      setIsDisabled(true);
      const btnSend = document.querySelector(".btn-message");
      btnSend.classList.add("success");
      btnSend.textContent = lang.formBtnSucces;
      setSent(true);
    } else setIsDisabled(false);
  };

  // handle submit

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataChecked = validation(data);
    Object.values(dataChecked).every((el) => el)
      ? fetchForm(data)
      : formError();
  }

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">{lang.contactTitle}</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-box">
            <h3 className="contact-info-title">{lang.contactSubTitle}</h3>
            <ul className="contact-info-list">
              {lang.contactInfo.map((item, i) => (
                <li className="contact-info-icons" key={i}>
                  <ion-icon
                    className="contact-iconInfo"
                    style={{ fontSize: "24px" }}
                    name={`${item.icon}-outline`}></ion-icon>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="social-box-flex">
            <h3 className="social-title">{lang.contactSocialTitle}</h3>
            <ul className="contact-social-list">
              {lang.contactIcons.map((link, i) => (
                <li key={i}>
                  <Link
                    className={link.label}
                    to={link.path}
                    aria-label="Social media profile of Alvaro Cayo (Albored)"
                    target="_blank">
                    <ion-icon
                      style={{ fontSize: "20px" }}
                      name={`${link.icon}`}></ion-icon>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* form */}
        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <div className="input-group">
            <label htmlFor="form-name">{lang.formName}</label>
            <input
              className="form-input"
              id="form-name"
              type="text"
              placeholder={lang.formNamePlaceH}
              autoComplete="none"
              required
              name="name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="form-phone">{lang.formPhone}</label>
            <input
              className="form-input"
              id="form-phone"
              type="text"
              placeholder={lang.formPhonePlaceH}
              autoComplete="none"
              name="phone"
            />
          </div>

          <div className="input-group">
            <label htmlFor="form-email">{lang.formMail}</label>
            <input
              className="form-input"
              id="form-email"
              type="email"
              required
              placeholder={lang.formMailPlaceH}
              name="email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="form-message">{lang.formMessage}</label>
            <textarea
              className="form-input textarea"
              name="message"
              id="form-message"
              cols="40"
              rows="10"
              autoComplete="none"
              required
              placeholder={lang.formMessagePlaceH}></textarea>
          </div>

          <button className="btn-message" type="submit" disabled={isDisabled}>
            {lang.formBtn}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
