import { useState, useEffect } from "react";
import styles from "./Videos.module.scss";
import { useLanguage, useTranslations } from "../../i18n/utils";

export const Videos = () => {
  const [isClient, setIsClient] = useState(false);
  const lang = useLanguage();
  const t = useTranslations(lang);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className={styles.videos} id="videos">
      <h2 className={styles.videos__title}>{t("videos.title")}</h2>
      <div className={styles.videos__video}>
        {isClient ? (
          <iframe
            className={styles.videos__iframe}
            src="https://www.youtube.com/embed/WL7YcduiG3w?si=rxBgG_NUN54dGxqM"
            title="Zul Portfolio - Videos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            style={{
              height: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#000",
              borderRadius: "10px",
              color: "#fff",
            }}
            >
            <p>{t("videos.loading")}</p>
          </div>
        )}
      </div>
      <div className={styles.videos__video}>
        {isClient ? (
          <iframe
            className={styles.videos__iframe}
            src="https://www.youtube.com/embed/GaXbUI8dLkg?si=JYp4_lf7iLiqBbok"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            style={{
              height: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#000",
              borderRadius: "10px",
              color: "#fff",
            }}
          >
            <p>{t("videos.loading")}</p>
          </div>
        )}
      </div>
    </div>
  );
};
