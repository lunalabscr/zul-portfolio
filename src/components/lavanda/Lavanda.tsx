import clsx from "clsx";
import styles from "./Lavanda.module.scss";
import { InstagramEmbed } from "react-social-media-embed";
import { useEffect, useState } from "react";
import { useLanguage, useTranslations } from "../../i18n/utils";
import { Placeholder } from "@components/placeholder/Placeholder";

export const Lavanda = () => {
  const [client, setClient] = useState(false);
  const lang = useLanguage();
  const t = useTranslations(lang);

  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <section className={styles.lavanda} id="lavanda">
      <div className={styles.lavanda__wrapper}>
        <div className={styles.lavanda__info}>
          <img
            alt="Espacio Lavanda Yoga Studio"
            className={styles.lavanda__logo}
            src={import.meta.env.BASE_URL + "images/LAVANDA.webp"}
          />
          <p className={styles["lavanda__info-text"]}>{t("lavanda.text")}</p>
        </div>
        {client && (
          <InstagramEmbed
            url="https://www.instagram.com/espaciolavandacr/p/DL5Qk5Xu_D-/"
            embedPlaceholder={<Placeholder />}
          />
        )}
      </div>
    </section>
  );
};
