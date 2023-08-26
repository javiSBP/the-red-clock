import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";

export default {
  selfURL: import.meta.url,
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "arkham-horror": '"Arkham Horror"',
        arnopro: "Arnopro",
        "arnopro-bold": '"Arnopro Bold"',
        "arnopro-bold-italic": '"Arnopro Bold Italic"',
      },
      colors: {
        guardian: "#2B80C5",
        seeker: "#EC8426",
        rougue: "#107116",
        mystic: "#4C17A1",
        survivor: "#CC3038",
        neutral: "#5D5D5D",
      },
      keyframes: {
        "floating-classes": {
          "0%": {
            transform: "translateY(0)",
            opacity: 0,
          },
          "50%": {
            opacity: 0.7,
          },
          "100%": {
            transform: "translateY(-150px)",
            opacity: 0,
          },
        },
      },
      animation: {
        "floating-classes": "floating-classes 5s ease-in-out infinite",
      },
    },
  },
  preflight: {
    input: apply`outline-none`,
    button: apply`outline-none`,
    "@font-face": [
      {
        fontFamily: "Arkham Horror",
        fontWeight: "500",
        fontStyle: "normal",
        src: 'url(/fonts/AH_LCG_v3.ttf) format("truetype")',
      },
      {
        fontFamily: "Arnopro",
        fontWeight: "500",
        fontStyle: "normal",
        src: 'url(/fonts/arnopro.otf) format("opentype")',
      },
      {
        fontFamily: "Arnopro Bold",
        fontWeight: "700",
        fontStyle: "bold",
        src: 'url(/fonts/arnoprobold.otf) format("opentype")',
      },
      {
        fontFamily: "Arnopro Bold Italic",
        fontWeight: "700",
        fontStyle: "italic",
        src: 'url(/fonts/arnoprobolditalic.otf) format("opentype")',
      },
    ],
  },
  plugins: {
    "animation-delay": (parts, { theme }) => ({
      "animation-delay": theme("transitionDelay", parts[0]),
    }),
  },
} as Options;
