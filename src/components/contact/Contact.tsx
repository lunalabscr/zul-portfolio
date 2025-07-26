import clsx from "clsx";
import styles from "./Contact.module.scss";
import { useMemo } from "react";
import { useLanguage, useTranslations } from "../../i18n/utils";

const socialMedia = [
  {
    icon: "bi bi-instagram",
    url: "https://www.instagram.com/samanthazul_/#",
  },
  {
    icon: "bi bi-facebook",
    url: "https://www.facebook.com/share/1BgQwr3Hxn/?mibextid=wwXIfr ",
  },
  {
    icon: "bi bi-youtube",
    url: "https://youtube.com/@samanthazul?si=QXuuXXW_Ta3RsjJQ ",
  },
  {
    icon: "bi bi-envelope-fill",
    url: "",
  },
];

export const Contact = () => {
  const lang = useLanguage();
  const t = useTranslations(lang);
  
  const getSocialMediaA = useMemo(() => {
    return socialMedia.map((social) => (
      <a href={social.url} key={social.url}>
        <i className={social.icon}></i>
      </a>
    ));
  }, []);

  return (
    <div className={styles.contact} id="contact">
      <div className={styles["image-container"]}>
        <img src={import.meta.env.BASE_URL + "images/ORBITA-36.webp"} />
      </div>

      <div className={styles.contact__info}>
        <p className={styles.contact__info__text}>
          {t("contact.text1")}
        </p>
        <p className={styles.contact__info__text}>
          {t("contact.text2")}
        </p>
        <div className={styles.contact__info__icons}>{getSocialMediaA}</div>
      </div>
    </div>
  );
};
