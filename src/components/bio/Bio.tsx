import styles from "./Bio.module.scss";
import { useLanguage, useTranslations } from "../../i18n/utils";

export const Bio = () => {
  const lang = useLanguage();
  const t = useTranslations(lang);

  return (
    <section className={styles.bio} id="bio">
      <img
        src={import.meta.env.BASE_URL + "images/ORBITA-42.webp"}
        className={styles["full-height-image"]}
      />
      <article className={styles["bio__article"]}>
        <h2 className={styles.bio__title}>{t("bio.title")}</h2>
        <p className={styles.bio__text}>
          {t("bio.text.paragraph1")}
          <br />
          <br />
          {t("bio.text.paragraph2")}
          <br />
          <br />
          {t("bio.text.paragraph3")}
        </p>
      </article>
    </section>
  );
};
