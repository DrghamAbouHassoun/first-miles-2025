import { useContext } from "react";
import { LangContext } from "../contexts/LangProvider";

export function useLocale() {
  const { lang, setLang } = useContext(LangContext);
  return { lang, setLang };
}
