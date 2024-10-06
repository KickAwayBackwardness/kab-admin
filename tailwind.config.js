/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,xml, html}"],
  theme: {
    extend: {
      colors: {
        green: "#c0fb51",
        gray: "#e9e9e9",
        admin_background: "#f8f8f8",
        sub_header_bg: "rgba(34,34,34,0.8)",
        sf_bg: "#e9e9e9",
        line: "#d3d3d3",
        light_gray_2: "#f3f3f3",
        error: "#FA5D29",
        lemon: "#dceda9",
      },
      fontSize: {
        tbody: "clamp(16px,14.5915492958px + 0.2816901408vw,20px)",
      },
      spacing: {
        padding_thead: "clamp(10px,2vw,28px)",
        padding_tbody: "clamp(10px, 2vw, 36px) clamp(10px, 2vw, 28px)",
      },
    },
  },
  plugins: [],
};
