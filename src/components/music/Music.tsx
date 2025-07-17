import styles from "./Music.module.scss";

export const Music = () => {
  return (
    <section className={styles.music} id="music">
      <div className={styles.music__wrapper}>
        <article>
          <h2 className={styles.music__title}>Musica</h2>
          <p className={styles.music__text}>
            La música del álbum “Órbita Plantae” se estrenó en todas las
            plataformas digitales de streaming este 2025, refleja el esfuerzo y
            dedicación de Samantha Zul y la banda con quienes grabó las
            canciones; un viaje de grabación entre el estudio El Nido (Bocas del
            Toro) y su propio estudio Oso Caballo (San Pedro). Se acompaña de
            los coros de Beatriz Morales, el bajo de Ramón Morales, los solos y
            acompañamientos de guitarra eléctrica de Agustín Azofeifa y la
            fuerza de la batería y darbuka de Diana Avellán.
          </p>
          <br />

          <p className={styles.music__text}>
            Sus letras y sonoridades transportan al oyente a aquellos espacios
            naturales donde tenemos la paz para hablar con nosotros mismos y
            reflexionar sobre la vida con sus altos y bajos. Además, su forma de
            cantar es una mezcla de suavidad y potencia, que se integra con cada
            palabra cantada.
          </p>
        </article>
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450"
          className={styles.iframe}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/cr/album/%C3%B3rbita-plantae-ep/1808618082"
        ></iframe>
      </div>
    </section>
  );
};
