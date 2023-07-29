/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/2021/11/circuit-board-and-ai-micro-processor-artificial-intelligence-of-digital-human-3d-render.jpg')",
      },
      keyframes: {
        ripple: {
          "0%": {
            " box-shadow":
              "0 0 0 0 rgba(0,159,178,1.000), 0 0 0 1px rgba(0,159,178,1.000), 0 0 0 3px rgba(0,159,178,1.000), 0 0 0 5px rgba(0,159,178,1.000)",
          },
          "100%": {
            "box-shadow":
              "0 0 0 0 rgba(0,159,178,1.000),0 0 0 4px rgba(255,0,0, 0.3),0 0 0 20px rgba(255,0,0, 0),0 0 0 30px rgba(255,0,0, 0)",
          },
        },
      },
      animation: {
        ripple: "ripple 1.5s linear infinite",
      },
    },
    plugins: [],
  },
};
