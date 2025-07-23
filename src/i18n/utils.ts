import * as React from "react";
import { ui, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl() {
  // Handle SSR - use default language on server
  if (typeof window === 'undefined') {
    return defaultLang;
  }
  
  const browserLang = navigator.language.split('-')[0]; // Get the short language code
  if (browserLang in ui) return browserLang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

// Helper to get the opposite language (for language switcher)
export function getAlternateLanguage(
  currentLang: keyof typeof ui
): keyof typeof ui {
  return currentLang === "es" ? "en" : "es";
}

// Hook for handling language detection in React components
export function useLanguage() {
  const [language, setLanguage] = React.useState<keyof typeof ui>(defaultLang);
  
  React.useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang in ui) {
        setLanguage(browserLang as keyof typeof ui);
      }
    }
  }, []);
  
  return language;
}
