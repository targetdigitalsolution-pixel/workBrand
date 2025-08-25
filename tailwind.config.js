/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "black"],
  },
  theme: {
    extend: {
      colors: {
        "custom-primary": "#D4A850",
        "custom-yellow": "#FEF2D4",
        "custom-black": "#151414",
        "custom-brown": "#C08000",
      },
      backgroundImage: {
        "custom-gradient-black":
          "linear-gradient(3deg, #151414 13%, #282727 80%)",
        "custom-gradient-orange": "linear-gradient(90deg, #D4A850, #C08000)",
        "custom-gradient-white": "linear-gradient( #fff, #fff)",
        "custom-gradient-dark": "linear-gradient( #000, #000)",
        "custom-gradient-transparent": "linear-gradient( #00000000, #00000000)",
        "custom-gradient-yellow": "linear-gradient(90deg, #FEF2D4, #FFD876)",
        "custom-gradient-bg":
          "linear-gradient(90deg, #fef4db 10%, #FFFFFF 90%)",
        "custom-gradient-card":
          "linear-gradient(20deg, #FEF4DB80 36%, #FFFFFF 80%)",
      },
      padding: {
        "custom-padding": "60px",
      },

      width: {
        custom: "150px",
      },
    },
    fontFamily: {
      cairo: ["Cairo", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
