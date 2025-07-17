import styles from "./Bio.module.scss";

export const Bio = () => {
  return (
    <section className={styles.bio} id="bio">
      <img
        src="/images/ORBITA-42.jpg"
        className={styles["full-height-image"]}
      />
      <article className={styles["bio__article"]}>
        <h2 className={styles.bio__title}>BIO</h2>
        <p className={styles.bio__text}>
          Samantha es una artista interdisciplinaria, inicia su carrera musical
          desde el 2013 en diferentes bandas como Gogo Kuto, Leche de Coco e
          Ilelubitas, sin embargo, lanza su primer EP “Órbita Plantae” como
          solista en el 2025 con el apoyo de una banda conformada por bajo
          eléctrico, guitarras eléctricas, batería, percusión, pianica y coros.
          <br />
          <br />
          Su camino en la música fue intuitivo desde niña, siempre estuvo cerca
          del canto y la danza; por lo que decidió estudiar danza y música en la
          universidad. Desde entonces ha tenido la oportunidad de estar en
          diferentes proyectos artísticos que le ha permitido tener una visión
          amplia de las artes que le gusta plasmar en su proyecto musical.
          <br />
          <br />
          Como tiene un universo interno tan lleno de melodías e ideas decidió
          abrir su proyecto solista para poder dar pie a esas ideas y así poder
          darlas a conocer, ya que ofrecen una sonoridad diferente que puede
          conectar con la gente de una forma íntima. Con su forma de cantar
          busca conmover desde el alma, y sus composiciones al estar siempre
          inspiradas en la naturaleza y las relaciones humanas, se fusionan en
          sus canciones.
        </p>
      </article>
    </section>
  );
};
