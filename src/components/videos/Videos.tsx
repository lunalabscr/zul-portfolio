import styles from "./Videos.module.scss";

export const Videos = () => {
  return (
    <div className={styles.videos} id="videos">
      <div className={styles.videos__video}>
        <iframe
          className={styles.videos__iframe}
          src="https://www.youtube.com/embed/WL7YcduiG3w?si=rxBgG_NUN54dGxqM"
          title="Zul Portfolio - Videos"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.videos__video}>
        <iframe
          className={styles.videos__iframe}
          src="https://www.youtube.com/embed/GaXbUI8dLkg?si=JYp4_lf7iLiqBbok"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
