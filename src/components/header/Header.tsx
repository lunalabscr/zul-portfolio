import { useEffect, useMemo, useState } from "react";
import styles from "./Header.module.scss";
import { useHeaderColor } from "src/hooks/useHeaderColor";
import clsx from "clsx";
import { useLanguage, useTranslations } from "../../i18n/utils";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const sectionIds = ["home", "bio", "music", "videos", "store", "events"];
  const activeSection = useHeaderColor(sectionIds);
  const lang = useLanguage();
  const t = useTranslations(lang);

  const toggleNavigation = () => {
    setNavOpen(!navOpen);
  };

  const pages = [
    { name: t("nav.bio"), path: "#bio" },
    { name: t("nav.music"), path: "#music" },
    { name: t("nav.videos"), path: "#videos" },
    { name: t("nav.store"), path: "#store" },
    { name: t("nav.concerts"), path: "#events" },
    { name: t("nav.lavanda"), path: "#lavanda" },
    { name: t("nav.contact"), path: "#contact" },
  ];

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navOpen]);

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
            styles[`header__title-${activeSection}`] // Ensure this class exists
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
          className={clsx(
            styles.header__nav__toggle,
            styles[`header__toggle-${activeSection}`]
          )}
        >
          {navOpen ? (
            <i className={clsx("bi bi-x", styles["header__header-icon"])}></i>
          ) : (
            <i
              className={clsx(
                "bi bi-list",
                styles["header__header-icon"],
                styles[`header__toggle-${activeSection}`]
              )}
            ></i>
          )}
        </button>
        <ul className={styles["header__nav__ul"]}>{pageLinks}</ul>
      </nav>
      <ul
        className={styles[`header__nav__open-menu${navOpen ? "--open" : ""}`]}
      >
        <a href="#home" onClick={toggleNavigation}>
          <p className={styles["header__nav__drawer-title"]}>Samantha Zul</p>
        </a>
        {pageLinks}
      </ul>
    </header>
  );
};
