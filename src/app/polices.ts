import { Geist, Manrope } from "next/font/google";

export const sans = Geist({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const display = Manrope({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["300", "600", "800"],
  display: "swap",
  preload: true,
});
