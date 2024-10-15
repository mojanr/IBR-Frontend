import { Roboto as FontDefault } from "next/font/google";

export const fontDefault = FontDefault({
  subsets: ["latin"],
  variable: "--font-default",
  weight: "400"
});