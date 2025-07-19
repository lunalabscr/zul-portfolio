import { act, useMemo, useState } from "react";
import styles from "./Header.module.scss";
import { useHeaderColor } from "src/hooks/useHeaderColor";
import clsx from "clsx";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const sectionIds = [
    "home",
    "bio",
    "music",
    "videos",
    "store",
    "events",
    // "lavanda",
    // "blog",
    // "contact"
  ];
  const activeSection = useHeaderColor(sectionIds);

  const toggleNavigation = () => {
    setNavOpen(!navOpen);
  };

  const pages = [
    { name: "Bio", path: "#bio" },
    { name: "Musica", path: "#music" },
    { name: "Videos", path: "#videos" },
    { name: "Tienda", path: "#store" },
    { name: "Conciertos", path: "#events" },
    // { name: "Espacio Lavanda", path: "#lavanda" },
    // { name: "Blog", path: "#blog" },
    // { name: "Contacto", path: "#contact" },
  ];
  console.log(activeSection === "events");

  const pageLinks = useMemo(() => {
    return pages.map((item) => (
      <li
        key={item.name}
        onClick={() => {
          setNavOpen(false);
        }}
      >
        <a
          href={item.path}
          className={clsx(
            styles["header__nav__link"],
            styles[`header__title-${activeSection}`]
          )}
        >
          {item.name}
        </a>
      </li>
    ));
  }, [activeSection]);

  return (
    <header
      className={`${styles.header} ${styles[`header--${activeSection}`]}`}
    >
      <nav className={styles.header__nav}>
        <a href="#home">
          <h1
            className={clsx(
              styles.header__title,
              styles[`header__title-${activeSection}`]
            )}
          >
            Samantha Zul
          </h1>
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
