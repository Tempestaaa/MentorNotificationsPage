/** @type {import('tailwindcss'),.Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Red: "hsl(1, 90%, 64%)",
        Blue: "hsl(219, 85%, 26%)",

        Verylightgrayishblue: "hsl(210, 60%, 98%)",
        Lightgrayishblue1: "hsl(211, 68%, 94%)",
        Lightgrayishblue2: "hsl(205, 33%, 90%)",
        Grayishblue: "hsl(219, 14%, 63%)",
        Darkgrayishblue: "hsl(219, 12%, 42%)",
        Verydarkblue: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
