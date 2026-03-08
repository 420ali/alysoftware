"use client";

import {
  createContext,
  useContext,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";
import { getMessage } from "@/lib/i18n";
import type { Locale } from "@/i18n/config";
import enMessages from "@/messages/en.json";
import trMessages from "@/messages/tr.json";

type Messages = Record<string, unknown>;

const messagesMap: Record<Locale, Messages> = {
  en: enMessages as Messages,
  tr: trMessages as Messages,
};

type LocaleContextValue = {
  locale: Locale;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo(() => {
    const messages = messagesMap[locale] ?? messagesMap.en;
    return {
      locale,
      t: (key: string) => getMessage(messages, key),
    };
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "tr" ? "tr" : "en";
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
