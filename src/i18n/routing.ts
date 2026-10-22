import { defineRouting } from "next-intl/routing";

export const locales = ["en", "pt", "es", "ja"] as const;
export const defaultLocale = "en" as const;

export const routing = {
  ...defineRouting({
    locales: locales as unknown as string[],
    defaultLocale,
    localePrefix: "always",
    localeDetection: false,
  }),
  locales: locales as unknown as Locale[],
  defaultLocale,
};

export type Locale = (typeof locales)[number];
