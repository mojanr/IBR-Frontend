import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme")

export const COLOR = {
  // PRIMARY: "#15803d",
  // PRIMARY: "#18181b",
  PRIMARY: "#002366",
  BLUE: "#3b82f6",
  ORANGE: "#f97316",
  SUBTLE: "#94a3b8",
  SLATE: "#f1f5f9",
  SLATE_SECONDARY: "#f8fafc",
}

const config: Config = {
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-default)", "roboto", "arial", ...fontFamily.sans],
      },
      colors: {
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        primary: {
          DEFAULT: COLOR.PRIMARY,
        },
        blue: {
          DEFAULT: COLOR.BLUE
        },
        orange: {
          DEFAULT: COLOR.ORANGE
        },
        subtle: {
          DEFAULT: COLOR.SUBTLE
        },
        slate: {
          DEFAULT: COLOR.SLATE
        },
        slateSecondary: {
          DEFAULT: COLOR.SLATE_SECONDARY
        },
      },
      fontWeight: {
        subtle: "600"
      }
    },
  },
  plugins: [],
};
export default config;
