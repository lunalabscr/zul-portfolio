import { useState, useEffect } from "react";
import styles from "./Music.module.scss";
import { useLanguage, useTranslations } from "../../i18n/utils";

export const Music = () => {
  const [isClient, setIsClient] = useState(false);
  const lang = useLanguage();
  const t = useTranslations(lang);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className={styles.music} id="music">
      <div className={styles.music__wrapper}>
        <article>
          <h2 className={styles.music__title}>{t("music.title")}</h2>
          <p className={styles.music__text}>{t("music.text.paragraph1")}</p>
          <br />

          <p className={styles.music__text}>{t("music.text.paragraph2")}</p>
        </article>
        {isClient ? (
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            title="Samantha Zul Apple Music"
            height="450"
            className={styles.iframe}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/cr/album/%C3%B3rbita-plantae-ep/1808618082"
          ></iframe>
        ) : (
          <div
            style={{
              height: "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f0f0f0",
              borderRadius: "10px",
            }}
          >
            <p>{t("store.loading.music")}</p>
          </div>
        )}
      </div>
    </section>
  );
};
