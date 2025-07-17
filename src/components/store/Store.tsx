import styles from "./Store.module.scss";

export const Store = () => {
  return (
    <div className={styles.store}>
      <div className={styles.store__wrapper}>
        <section className={styles.store__section}>
          <p className={styles.store__text}>
            En Bandcamp me podés comprar la música directamente y descargarla en
            una excelente calidad de audio (WAV).
            <br />
            <br /> También están disponibles los discos de las bandas de las que
            formo parte.
          </p>
          <img src="/images/bandcamp.png" width={"320px"} />
        </section>
        <section className={styles["store__album-section"]}>
          <article className={styles.store__album}>
            <h3>En Ilelubitas</h3>
            <div className={styles.store__album__wrapper}>
              <iframe
                className={styles.store__album__style}
                src="https://bandcamp.com/EmbeddedPlayer/album=916484642/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://ilelubitas.bandcamp.com/album/ilelubitas-en-el-arrecife-coralino">
                  Ilelubitas en el Arrecife Coralino by Ilelubitas
                </a>
              </iframe>
              <iframe
                className={styles.store__album__style}
                src="https://bandcamp.com/EmbeddedPlayer/track=2571904613/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://ilelubitas.bandcamp.com/track/dicen">
                  Dicen by Ilelubitas
                </a>
              </iframe>
            </div>
          </article>
          <article className={styles.store__album}>
            <h3>En Leche de Coco</h3>
            <div className={styles.store__album__wrapper}>
              <iframe
                className={styles.store__album__style}
                src="https://bandcamp.com/EmbeddedPlayer/album=1537564219/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://ccecr.bandcamp.com/album/la-movida-can-bal-5">
                  La Movida Caníbal by Leche de Coco
                </a>
              </iframe>
              <iframe
                className={styles.store__album__style}
                src="https://bandcamp.com/EmbeddedPlayer/track=1452245062/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://lechedecoco.bandcamp.com/track/the-old-friend">
                  The Old Friend by Leche de Coco
                </a>
              </iframe>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};
