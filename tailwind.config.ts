import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobileMd: "400px",
        mobileXl: "520px",
        tablet: "768px",
        laptop: "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          xl: "38px",
        },
      },
      fontFamily: {
        fira: ["var(--font-fira)"],
      },
      fontSize: {
        "3xs": [
          "10px",
          {
            lineHeight: "12px",
            fontWeight: "400",
          },
        ],
        "2xs": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        xs: [
          "14px",
          {
            lineHeight: "18px",
            fontWeight: "400",
          },
        ],
        xsb: [
          "14px",
          {
            lineHeight: "18px",
            fontWeight: "700",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "21px",
            fontWeight: "400",
          },
        ],
        baseb: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        md: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        mdb: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        mdsb: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        lg: [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        lgb: [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "700",
          },
        ],
        xlsb: [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        "2xlsb": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "600",
          },
        ],
        "3xlsb": [
          "44px",
          {
            lineHeight: "48px",
            fontWeight: "600",
          },
        ],
        "3xlb": [
          "44px",
          {
            lineHeight: "48px",
            fontWeight: "700",
          },
        ],
        "4xlb": [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: "700",
          },
        ],
        "4xlsb": [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: "600",
          },
        ],
        "5xlb": [
          "56px",
          {
            lineHeight: "72px",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        primary: "#042C4A",
        secondary: "#ACC8E5",
        accent: "#E1300B",
        black: "#080000",
        blue: "#1b445a",
        disabled: "#8B8B8B",
        grey: "#444444",
        white: { bg: "#FCFCFC", bgSecondary: "#F6F6F6", text: "#FFFFFF" },
        error: { text: "#FF958F", input: "#DD4037" },
        backdrop: "#507091",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to bottom, rgba(135, 134, 134, 0) 0%, rgba(89, 114, 134, 0.59) 55%, rgba(4, 44, 74, 0.9) 100%)",
        writeUsGradientTablet:
          "linear-gradient(to right, rgba(86, 88, 102, 0) 0%, rgba(43, 69, 90, 0.59) 32%, rgba(4, 44, 74, 0.9) 56%)",
        rentHeroGradient:
          "linear-gradient(to bottom, rgba(135, 134, 134, 0) 0%, rgba(89, 114, 134, 0.66) 55%, rgba(4, 44, 74, 1) 100%)",
        heroGradient:
          "linear-gradient(to top, rgba(135, 134, 134, 0) 0%, rgba(89, 114, 134, 0.66) 55%, rgba(4, 44, 74, 1) 100%)",
        headerGradient:
          "linear-gradient(to bottom, rgba(27, 68, 90, 1) 0%, rgba(27, 68, 90, 0.85) 50%, rgba(27, 68, 90, 0.7) 100%)",
        cardGradient:
          "linear-gradient(to bottom, rgba(89, 114, 134, 0) 0%, rgba(27, 63, 90, 0.27) 33%, rgba(4, 44, 74, 1) 100%)",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      keyframes: {
        opacityChange: {
          "0%": {
            opacity: "0",
          },
          "18%, 32%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        smoothBounce: {
          "25%": { transform: "translateY(-25%)" },
          "75%": { transform: "translateY(25%) scale(0.75)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },

      animation: {
        hero: "opacityChange 12000ms ease-out infinite",
        benefit: "smoothBounce 1500ms ease-out 1",
        rotation: "rotate 1500ms linear infinite",
      },
    },
  },
  plugins: [
    nextui(),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),
  ],
};
export default config;
