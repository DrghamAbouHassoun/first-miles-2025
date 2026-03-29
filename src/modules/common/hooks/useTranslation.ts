import { useContext } from "react";
import { LangContext } from "../contexts/LangProvider";

export function useTranslation(namespace: string) {
  const { lang, translations } = useContext(LangContext);
  const dict =
    (translations as Record<string, Record<string, Record<string, unknown>>>)[
      lang
    ]?.[namespace] ?? {};

  function t(key: string): string {
    const parts = key.split(".");
    let result: unknown = dict;
    for (const part of parts) {
      result = (result as Record<string, unknown>)?.[part];
    }
    return typeof result === "string" ? result : key;
  }

  function tArray(key: string): string[] {
    const parts = key.split(".");
    let result: unknown = dict;
    for (const part of parts) {
      result = (result as Record<string, unknown>)?.[part];
    }
    return Array.isArray(result) ? (result as string[]) : [];
  }

  return { t, tArray };
}
