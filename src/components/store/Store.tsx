import { useState, useEffect } from "react";
import styles from "./Store.module.scss";
import { useLanguage, useTranslations } from "../../i18n/utils";
import { Placeholder } from "@components/placeholder/Placeholder";

export const Store = () => {
  const [isClient, setIsClient] = useState(false);

  const [orbitaLoaded, setOrbitaLoaded] = useState(false);
  const [ilelubitasAlbumLoaded, setIlelubitasAlbumLoaded] = useState(false);
  const [ilelubitasTrackLoaded, setIlelubitasTrackLoaded] = useState(false);
  const [lecheAlbumLoaded, setLecheAlbumLoaded] = useState(false);
  const [lecheTrackLoaded, setLecheTrackLoaded] = useState(false);

  const lang = useLanguage();
  const t = useTranslations(lang);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.store} id="store">
      <div className={styles.store__wrapper}>
        <p className={styles.store__title}>{t("store.title")}</p>
        <section className={styles.store__section}>
          <p className={styles.store__text}>
            {t("store.text")}
            <br />
            <br />
            {t("store.text2")}
          </p>

          <div className={styles.store__album__orbita}>
            {isClient ? (
              <>
                {!orbitaLoaded && <Placeholder height={400} />}

                <iframe
                  style={{ visibility: orbitaLoaded ? "visible" : "hidden" }}
                  onLoad={() => setOrbitaLoaded(true)}
                  title="Samantha Zul Bandcamp page"
                  className={styles.store__album__orbita}
                  src="https://bandcamp.com/EmbeddedPlayer/album=2498049681/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                  seamless
                >
                  <a href="https://samanthazul.bandcamp.com/album/rbita-plantae">
                    Órbita Plantae by Samantha Zul
                  </a>
                </iframe>
              </>
            ) : (
              <Placeholder height={"100%"} />
            )}
          </div>
        </section>

        <section className={styles["store__album-section"]}>
          <article className={styles.store__album}>
            <h3>{t("store.band.ilelubitas")}</h3>
            <div className={styles.store__album__wrapper}>
              <div className={styles.store__album__item}>
                {isClient ? (
                  <>
                    {!ilelubitasAlbumLoaded && <Placeholder height={"100%"} />}
                    <iframe
                      style={{
                        visibility: ilelubitasAlbumLoaded
                          ? "visible"
                          : "hidden",
                      }}
                      onLoad={() => setIlelubitasAlbumLoaded(true)}
                      title="Ilelubitas bandcamp page"
                      className={styles.store__album__style}
                      src="https://bandcamp.com/EmbeddedPlayer/album=916484642/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                      seamless
                    >
                      <a href="https://ilelubitas.bandcamp.com/album/ilelubitas-en-el-arrecife-coralino">
                        Ilelubitas en el Arrecife Coralino by Ilelubitas
                      </a>
                    </iframe>
                  </>
                ) : (
                  <Placeholder height={"100%"} />
                )}
              </div>

              <div className={styles.store__album__item}>
                {isClient ? (
                  <>
                    {!ilelubitasTrackLoaded && <Placeholder height={"100%"} />}
                    <iframe
                      style={{
                        visibility: ilelubitasTrackLoaded
                          ? "visible"
                          : "hidden",
                      }}
                      onLoad={() => setIlelubitasTrackLoaded(true)}
                      title="Ilelubitas bandcamp page"
                      className={styles.store__album__style}
                      src="https://bandcamp.com/EmbeddedPlayer/track=2571904613/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                      seamless
                    >
                      <a href="https://ilelubitas.bandcamp.com/track/dicen">
                        Dicen by Ilelubitas
                      </a>
                    </iframe>
                  </>
                ) : (
                  <Placeholder height={"100%"} />
                )}
              </div>
            </div>
          </article>

          <article className={styles.store__album}>
            <h3>{t("store.band.leche")}</h3>
            <div className={styles.store__album__wrapper}>
              <div className={styles.store__album__item}>
                {isClient ? (
                  <>
                    {!lecheAlbumLoaded && <Placeholder height={"100%"} />}
                    <iframe
                      title="Leche de Coco bandcamp page"
                      className={styles.store__album__style}
                      src="https://bandcamp.com/EmbeddedPlayer/album=1537564219/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                      seamless
                      style={{
                        visibility: lecheAlbumLoaded ? "visible" : "hidden",
                      }}
                      onLoad={() => setLecheAlbumLoaded(true)}
                    >
                      <a href="https://ccecr.bandcamp.com/album/la-movida-can-bal-5">
                        La Movida Caníbal by Leche de Coco
                      </a>
                    </iframe>
                  </>
                ) : (
                  <Placeholder height={"100%"} />
                )}
              </div>

              <div className={styles.store__album__item}>
                {isClient ? (
                  <>
                    {!lecheTrackLoaded && <Placeholder height={"100%"} />}
                    <iframe
                      title="Leche de Coco bandcamp page"
                      className={styles.store__album__style}
                      src="https://bandcamp.com/EmbeddedPlayer/track=1452245062/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                      seamless
                      style={{
                        visibility: lecheTrackLoaded ? "visible" : "hidden",
                      }}
                      onLoad={() => setLecheTrackLoaded(true)}
                    >
                      <a href="https://lechedecoco.bandcamp.com/track/the-old-friend">
                        The Old Friend by Leche de Coco
                      </a>
                    </iframe>
                  </>
                ) : (
                  <Placeholder height={"100%"} />
                )}
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};
