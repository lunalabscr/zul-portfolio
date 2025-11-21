import { useLanguage, useTranslations } from "../../i18n/utils";
import styles from "./Concerts.module.scss";
import clsx from "clsx";

export const Concerts = () => {
  const lang = useLanguage();
  const t = useTranslations(lang);

  return (
    <section className={styles.concerts} id="events">
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
      <div className={styles.concerts__parent}>
        <div
          className={clsx(
            styles.concerts__wrapper,
            styles["concerts__concert-wrapper"]
          )}
        >
          <p className={styles.concerts__title}>{t("concerts.title")}</p>
          <p className={styles.concerts__title}>{t("concerts.upcoming")}</p>
          <div className={styles.concerts__sub}>
            <p>{t("concerts.subtitle")}</p>
            <p>{t("concerts.title2")}</p>
          </div>
        </div>
        <div className={clsx(styles.concerts__wrapper)}>
          {/* <p className={styles["concerts__secondary-text"]}>
            {t("store.band.ilelubitas")}{" "}
          </p>
          <p className={styles["concerts__secondary-sub"]}>
            {" "}
            {t("concerts.event1.date")}
          </p>
          <p className={styles["concerts__secondary-text"]}>
            {t("store.band.leche")}
          </p>
          <p className={styles["concerts__secondary-sub"]}>
            {" "}
            {t("concerts.event2.date")}
          </p> */}
        </div>
      </div>
    </section>
  );
};
