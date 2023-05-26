/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#342c2c",
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#f0f0f0",
        },
        "neutral-1": "#fff",
        "lightmode-primary-red": "#ff3e5b",
        "lightmode-primary-black": "#0b0b0c",
        "lightmode-neutral-grey3": "#858585",
        "lightmode-neutral-grey1": "#e6e6e6",
        "lightmode-neutral-grey0": "#f2f2f2",
        "lightmode-semantic-success": "#70c922",
        "lightmode-neutral-grey4": "#545454",
        "lightmode-neutral-grey2": "#b5b5b6",
        "neutral-10": "#262626",
        "character-primary-85": "rgba(0, 0, 0, 0.85)",
        "neutral-5": "#d9d9d9",
        "character-disabledampplaceholder-25": "rgba(0, 0, 0, 0.25)",
        "admin-neutral-11": "#1f1f1f",
        "primary-6": "#1890ff",
      },
      fontFamily: {
        "cta-14-bold": "Lato",
        "pingfang-sc": "'PingFang SC'",
        "h4-medium": "Roboto",
        arial: "Arial",
      },
      borderRadius: {
        "81xl": "100px",
        "111xl": "130px",
      },
    },
    fontSize: {
      "3xs": "10px",
      sm: "14px",
      xs: "12px",
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      xl: "20px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
