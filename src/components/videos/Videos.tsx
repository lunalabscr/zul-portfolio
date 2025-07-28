import { useState, useEffect } from "react";
import styles from "./Videos.module.scss";
import { useLanguage, useTranslations } from "../../i18n/utils";
import { Placeholder } from "@components/placeholder/Placeholder";

export const Videos = () => {
  const [isClient, setIsClient] = useState(false);
  const [video1Loaded, setVideo1Loaded] = useState(false);
  const [video2Loaded, setVideo2Loaded] = useState(false);

  const lang = useLanguage();
  const t = useTranslations(lang);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.videos} id="videos">
      <h2 className={styles.videos__title}>{t("videos.title")}</h2>

      {/* Video 1 */}
      <div className={styles.videos__video}>
        {!video1Loaded && <Placeholder height={320} />}
        {isClient && (
          <iframe
            className={styles.videos__iframe}
            src="https://www.youtube-nocookie.com/embed/WL7YcduiG3w?si=rxBgG_NUN54dGxqM"
            title="Zul Portfolio - Videos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onLoad={() => setVideo1Loaded(true)}
            style={{ visibility: video1Loaded ? "visible" : "hidden" }}
          />
        )}
      </div>

      {/* Video 2 */}
      <div className={styles.videos__video}>
        {!video2Loaded && <Placeholder height={320} />}
        {isClient && (
          <iframe
            className={styles.videos__iframe}
            src="https://www.youtube-nocookie.com/embed/GaXbUI8dLkg?si=JYp4_lf7iLiqBbok"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onLoad={() => setVideo2Loaded(true)}
            style={{ visibility: video2Loaded ? "visible" : "hidden" }}
          />
        )}
      </div>
    </div>
  );
};
