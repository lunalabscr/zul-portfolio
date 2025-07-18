import React from "react";
import styles from "./Concerts.module.scss";
import clsx from "clsx";

export const Concerts = () => {
  return (
    <section className={styles.concerts}>
      <div className={styles["concerts__wrapper"]}>
        <div className={styles["concerts__image-wrapper"]}>
          <img
            className={styles["concerts__image"]}
            src={import.meta.env.BASE_URL + "images/ORBITA-29.jpg"}
            alt=""
          />
        </div>
        <article className={styles["concerts__article"]}>
          <div
            className={clsx(
              styles["concerts__title-wrapper"],
              styles["concerts__article-element"]
            )}
          >
            <p className={styles["concerts__title"]}>
              Proximamente presentación <br /> en vivo de “Órbita Plantae”
            </p>
          </div>
          <div className={clsx(styles["concerts__article-element"])}>
            <p className={styles["concerts__text"]}>ilelubitas</p>
            <p className={styles["concerts__sub"]}>
              Domingo, 28 de septiembre de 2025, Pococí, Festival Nacional de
              las Artes, Costa Rica.{" "}
            </p>
            <p className={styles["concerts__text"]}>Leche de Coco</p>
            <p className={styles["concerts__sub"]}>
              Jueves 2 de octubre de 2025, Matina, Festival Nacional de las
              Artes, Costa Rica.{" "}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
