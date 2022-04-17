/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
      colors: {
        text: "#000",
        background: "#fff",
        primary: "#32cd32",
        muted: "#999999",
        separator: "#00000014",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
