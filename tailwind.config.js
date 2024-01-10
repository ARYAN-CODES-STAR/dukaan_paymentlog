/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-100": "var(--black-100)",
        "black-12": "var(--black-12)",
        "black-30": "var(--black-30)",
        "black-50": "var(--black-50)",
        "black-60": "var(--black-60)",
        "black-85": "var(--black-85)",
        "black-90": "var(--black-90)",
        "black-95": "var(--black-95)",
        "black-98": "var(--black-98)",
        "primary-blue": "var(--primary-blue)",
        "primary-orange": "var(--primary-orange)",
        "secondary-green": "var(--secondary-green)",
        "secondary-navbar": "var(--secondary-navbar)",
      },
      fontFamily: {
        "body-1-medium": "var(--body-1-medium-font-family)",
        "body-1-regular": "var(--body-1-regular-font-family)",
        "body-2-medium": "var(--body-2-medium-font-family)",
        "body-2-regular": "var(--body-2-regular-font-family)",
        "caption-regular": "var(--caption-regular-font-family)",
        "heading-h5": "var(--heading-h5-font-family)",
        "sub-body-medium": "var(--sub-body-medium-font-family)",
        "sub-body-regular": "var(--sub-body-regular-font-family)",
        "sub-title-medium": "var(--sub-title-medium-font-family)",
        "sub-title-regular": "var(--sub-title-regular-font-family)",
      },
      boxShadow: {
        "shadow-card": "var(--shadow-card)",
      },
    },
  },
  plugins: [],
};