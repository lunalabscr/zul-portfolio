import styles from "./Bio.module.scss";
import { useLanguage, useTranslations } from "../../i18n/utils";

export const Bio = () => {
  const lang = useLanguage();
  const t = useTranslations(lang);

  return (
    <section className={styles.bio} id="bio">
      <img
        src={import.meta.env.BASE_URL + "images/ORBITA-42.webp"}
        srcSet={`
          ${import.meta.env.BASE_URL}images/ORBITA-42-480.webp 480w,
          ${import.meta.env.BASE_URL}images/ORBITA-42-768.webp 768w,
          ${import.meta.env.BASE_URL}images/ORBITA-42-1200.webp 1200w,
          ${import.meta.env.BASE_URL}images/ORBITA-42.webp 1920w
        `}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={styles["full-height-image"]}
        alt="Samantha Zul - Foto biográfica, artista musical"
        loading="lazy"
        decoding="async"
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
      <img
        src={import.meta.env.BASE_URL + "images/ORBITA-42.webp"}
        srcSet={`
          ${import.meta.env.BASE_URL}images/ORBITA-42-480.webp 480w,
          ${import.meta.env.BASE_URL}images/ORBITA-42-768.webp 768w,
          ${import.meta.env.BASE_URL}images/ORBITA-42-1200.webp 1200w,
          ${import.meta.env.BASE_URL}images/ORBITA-42.webp 1920w
        `}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={styles["mobile-image"]}
        alt="Samantha Zul - Foto biográfica, artista musical"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};
