import { useMemo, useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavigation = () => {
    setNavOpen(!navOpen);
  };

  const pages = [
    { name: "Bio", path: "#bio" },
    { name: "Musica", path: "#music" },
    { name: "Videos", path: "#videos" },
    { name: "Tienda", path: "#store" },
    { name: "Conciertos", path: "#events" },
    { name: "Espacio Lavanda", path: "#lavanda" },
    { name: "Blog", path: "#blog" },
    { name: "Contacto", path: "#contact" },
  ];

  const pageLinks = useMemo(() => {
    return pages.map((item) => (
      <li key={item.name}>
        <a href={item.path} className={styles["header__nav__link"]}>
          {item.name}
        </a>
      </li>
    ));
  }, []);

  return (
    <header className={`${styles.header} ${styles[`header--${null}`]}`}>
      <nav className={styles.header__nav}>
        <a href="#home">
          <h1 className={styles.header__title}>Samantha Zul</h1>
        </a>
        <button
          onClick={toggleNavigation}
          className={styles.header__nav__toggle}
        >
          Menu
        </button>
        <ul className={styles["header__nav__ul"]}>{pageLinks}</ul>
      </nav>
      <ul
        className={styles[`header__nav__open-menu${navOpen ? "--open" : ""}`]}
      >
        {pageLinks}
      </ul>
    </header>
  );
};
