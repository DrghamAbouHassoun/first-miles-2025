import { createContext, useState } from "react";

// EN translations
import enCommon from "../locales/en/common";
import enHome from "../locales/en/home";
import enAtAGlance from "../locales/en/at-a-glance";
import enOverview from "../locales/en/overview";
import enStrategicReview from "../locales/en/strategic-review";
import enLeadership from "../locales/en/leadership";
import enOperatingReview from "../locales/en/operating-review";
import enSustainabilityReview from "../locales/en/sustainability-review";

// AR translations
import arCommon from "../locales/ar/common";
import arHome from "../locales/ar/home";
import arAtAGlance from "../locales/ar/at-a-glance";
import arOverview from "../locales/ar/overview";
import arStrategicReview from "../locales/ar/strategic-review";
import arLeadership from "../locales/ar/leadership";
import arOperatingReview from "../locales/ar/operating-review";
import arSustainabilityReview from "../locales/ar/sustainability-review";

const translations = {
  en: {
    common: enCommon,
    home: enHome,
    "at-a-glance": enAtAGlance,
    overview: enOverview,
    "strategic-review": enStrategicReview,
    leadership: enLeadership,
    "operating-review": enOperatingReview,
    "sustainability-review": enSustainabilityReview,
  },
  ar: {
    common: arCommon,
    home: arHome,
    "at-a-glance": arAtAGlance,
    overview: arOverview,
    "strategic-review": arStrategicReview,
    leadership: arLeadership,
    "operating-review": arOperatingReview,
    "sustainability-review": arSustainabilityReview,
  },
};

type Translations = typeof translations;

interface LangContextState {
  lang: string;
  setLang: (lang: string) => void;
  translations: Translations;
}

export const LangContext = createContext<LangContextState>({
  lang: "en",
  setLang: (_lang: string) => {},
  translations,
});

function getCookie(name: string): string | null {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
  return match ? match.split("=")[1] : null;
}

function setCookie(name: string, value: string): void {
  document.cookie = `${name}=${value}; path=/; max-age=31536000`;
}

interface LangProviderProps {
  children: React.ReactNode;
}

const LangProvider = ({ children }: LangProviderProps) => {
  const [lang, setLangState] = useState<string>(() => {
    const saved = getCookie("lang");
    return saved === "ar" ? "ar" : "en";
  });

  const setLang = (newLang: string) => {
    setCookie("lang", newLang);
    setLangState(newLang);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, translations }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
