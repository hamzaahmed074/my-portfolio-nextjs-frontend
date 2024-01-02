import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        "9/20": "45%",
        "11/20": "55%",
      },
      colors: {
        // color palette from Zeplin styleguide
        navy: "#011918",
        orange: "#f7733e",
        blue: "#063361",
        "ice-blue": "#e6fdff",
        "dark-green": "#1b4d5d",
        "white-green": "#e6ebef",
        "dusk-blue": "#304685",
        "ghost-white": "#fafafa",

        // color intentions
        // used by button, divide, etc
        // and dynamic based on dark/white theme
        primary: {
          DEFAULT: "var(--color-primary-main)",
          "opacity-10": "var(--color-primary-opacity-10)",
          "opacity-20": "var(--color-primary-opacity-20)",
          "opacity-50": "var(--color-primary-opacity-50)",
          "opacity-70": "var(--color-primary-opacity-70)",
          contrastText: "var(--color-primary-contrast-text)",
        },
        body: "var(--color-body)", // body text
        heading: "var(--color-heading)", // heading text
        menu: "rgba(2, 47, 61, 0.3)", // menu hover
        //ayr colors
        "deep-sapphire": "#063361",
        endeavour: "#006AC6",
        cerulean: "#5CD5FF",
        charlotte: "#CEEFFD",
        tango: "#F88812",
        "hollywood-cerise": "#C902A1",
        "greyed-out": "#e8edef",
        "rich-black": "#033342",
        "menu-border": "rgba(255,51,97,0.3)",
        "filter-border": "#ECF0F3",
      },
      fontSize: {
        xxs: "0.625rem",
        "2.5xl": "1.75rem",
        "3.5xl": "2rem",
        "15px": "0.9375rem",
        "21px": "1.3125rem",
        "4.5xl": "2.5rem",
      },
      letterSpacing: {
        semiWider: "0.038em",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "navy-radial-gradient":
          "radial-gradient(circle at 0 0, #023242, #001413 100%)",
        "navy-radial-gradient-opacity-90":
          "radial-gradient(circle at 0 0, #023242e6, #001413e6 100%)",
        "brand-uber-gradient":
          "radial-gradient(circle at 0 0, #011c24, #002422 100%)",
        "ice-blue-gradient":
          "radial-gradient(circle at 0 0, #E6FDFF, #CEF6F9 100%)",
        "ayr-radial-gradient":
          "radial-gradient(circle at 0 0, #194890, #063361 100%)",
        "ayr-radial-gradient-opacity-90":
          "radial-gradient(circle at 0 0, #194890e6, #063361e6 100%)",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      padding: {
        full: "100%",
      },
      opacity: {
        12: "0.12",
        64: "0.64",
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      hexa: "1160px",
      hexalg: "1324px",
      "2xl": "1440px",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      body: ['var(--font-poppins)'],
      heading: ['var(--font-ayr)'],
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
      cursor: ["disabled"],
      display: ["group-hover"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
}
export default config