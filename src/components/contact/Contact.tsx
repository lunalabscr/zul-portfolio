import clsx from "clsx";
import styles from "./Contact.module.scss";
import { useMemo } from "react";
import { useLanguage, useTranslations } from "../../i18n/utils";

const socialMedia = [
  {
    icon: "bi bi-instagram",
    url: "https://www.instagram.com/samanthazul_/#",
    name: "instagram",
  },
  {
    icon: "bi bi-facebook",
    url: "https://www.facebook.com/share/1BgQwr3Hxn/?mibextid=wwXIfr ",
    name: "facebook",
  },
  {
    icon: "bi bi-youtube",
    url: "https://youtube.com/@samanthazul?si=QXuuXXW_Ta3RsjJQ ",
    name: "youtube",
  },
  {
    icon: "bi bi-envelope-fill",
    url: "mailto:samanthazulcostarica@gmail.com",
    name: "email",
  },
];

export const Contact = () => {
  const lang = useLanguage();
  const t = useTranslations(lang);

  const getSocialMediaA = useMemo(() => {
    return socialMedia.map((social) => (
      <a
        aria-label={`Link to ${social.name}`}
        href={social.url}
        key={social.url}
      >
        <i className={social.icon}></i>
      </a>
    ));
  }, []);

  return (
    <footer className={styles.contact} id="contact">
      <div className={styles["image-container"]}>
        <img
          alt="Samantha Zul  contact image"
          src={import.meta.env.BASE_URL + "images/ORBITA-36.webp"}
        />
      </div>

      <div className={styles.contact__info}>
        <p className={styles.contact__info__text}>{t("contact.text1")}</p>
        <p className={styles.contact__info__text}>{t("contact.text2")}</p>
        <div className={styles.contact__info__icons}>{getSocialMediaA}</div>
      </div>
    </footer>
  );
};
