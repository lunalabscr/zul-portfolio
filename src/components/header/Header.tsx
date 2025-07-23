import { useMemo, useState } from "react";
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
  ];

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
          className={clsx(
            styles.header__nav__toggle,
            styles[`header__toggle-${activeSection}`]
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`menu-icon ${styles[`header__toggle-${activeSection}`]}`}
            height="100%"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
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
