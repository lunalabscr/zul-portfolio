// src/hooks/useSectionObserver.tsx
import { useEffect, useState } from "react";

export function useHeaderColor(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px", // se activa cuando el top está cerca del centro de pantalla
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setActiveSection(id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  return activeSection;
}
