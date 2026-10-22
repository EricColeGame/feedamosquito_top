import { locales } from "@/i18n/routing";

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Feed A Mosquito Wiki",
  shortName: "Feed A Mosquito",
  logoText: "F",
  tagline: "Codes, Bosses, Eggs, Weapons & Upgrades",
  description: "Your complete Feed A Mosquito guide on Roblox: beginner tips, boss fights, eggs, weapons, upgrades, codes, and progression.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://feedamosquito.top",
  supportEmail: "support@feedamosquito.top",
  gameUrl: "https://www.roblox.com/games/125310131519813/Feed-A-Mosquito",
  heroVideoId: "SpZxd0VzKA4", // Feed A Mosquito full gameplay guide
  social: {
    discord: "https://www.roblox.com/groups/793364468",
    youtube: "https://www.youtube.com/results?search_query=Feed+A+Mosquito+Roblox+Gameplay",
  },
  locales,
  defaultLocale: "en",
};
