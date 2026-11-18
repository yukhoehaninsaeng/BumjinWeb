"use client";

import { useState, useEffect, useCallback } from "react";
import type { Lang } from "@/lib/translations";

const STORAGE_KEY = "bumjin-lang";
const EVENT_NAME = "bumjin-lang-change";
const VALID_LANGS: Lang[] = ["ko", "en", "zh", "ja"];

export function useLang(): [Lang, (next: Lang) => void] {
  const [lang, setLangState] = useState<Lang>("ko");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && VALID_LANGS.includes(saved)) {
      setLangState(saved);
    }

    const handleChange = (e: Event) => {
      const next = (e as CustomEvent<Lang>).detail;
      if (next && VALID_LANGS.includes(next)) {
        setLangState(next);
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue && VALID_LANGS.includes(e.newValue as Lang)) {
        setLangState(e.newValue as Lang);
      }
    };

    window.addEventListener(EVENT_NAME, handleChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener(EVENT_NAME, handleChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new CustomEvent<Lang>(EVENT_NAME, { detail: next }));
  }, []);

  return [lang, setLang];
}
