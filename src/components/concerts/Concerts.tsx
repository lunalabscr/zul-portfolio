import { useLanguage, useTranslations } from "../../i18n/utils";
import styles from "./Concerts.module.scss";
import clsx from "clsx";

export const Concerts = () => {
  const lang = useLanguage();
  const t = useTranslations(lang);

  return (
    <section className={styles.concerts} id="events">
      <div className={styles["concerts__wrapper"]}>
        <div className={styles["concerts__image-wrapper"]}>
          <img
            className={styles["concerts__image"]}
            src={import.meta.env.BASE_URL + "images/ORBITA-29.webp"}
            srcSet={`
              ${import.meta.env.BASE_URL}images/ORBITA-29-480.webp 480w,
              ${import.meta.env.BASE_URL}images/ORBITA-29-768.webp 768w,
              ${import.meta.env.BASE_URL}images/ORBITA-29-1200.webp 1200w,
              ${import.meta.env.BASE_URL}images/ORBITA-29.webp 1920w
            `}
            sizes="(max-width: 768px) 100vw, 70vw"
            alt="Samantha Zul - Imagen de concierto, presentación en vivo"
            loading="lazy"
            decoding="async"
          />
        </div>
        <article className={styles["concerts__article"]}>
          <div
            className={clsx(
              styles["concerts__title-wrapper"],
              styles["concerts__article-element"]
            )}
          >
            <p className={styles["concerts__title"]}>
              {t("concerts.title")} <br /> {t("concerts.title2")}
            </p>
          </div>
          <div className={clsx(styles["concerts__article-element"])}>
            <p className={styles["concerts__text"]}>
              {" "}
              {t("concerts.event1.band")}{" "}
            </p>
            <p className={styles["concerts__sub"]}>
              {t("concerts.event1.date")}
            </p>
            <p className={styles["concerts__text"]}>
              {t("concerts.event2.band")}{" "}
            </p>
            <p className={styles["concerts__sub"]}>
              {t("concerts.event2.date")}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
