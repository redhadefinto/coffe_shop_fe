/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        "grey-custom": "#4F5665",
        "dark-blue-cs": "#0B132A",
        "btn-yellow": "#FFBA33",
        "brown-cs": "#6A4029",
      },
      backgroundImage: {
        login: "url('/src/assets/login/background.webp')",
        forgot: "url('/src/assets/Forgot/background.webp')",
        home: "url('/src/assets/Home/background.webp')",
        "icon-contact": "url('/src/assets/Home/icon/Contact.svg')",
        "icon-location": "url('/src/assets/Home/icon/icon-maps.svg')",
        "icon-heart": "url('/src/assets/Home/icon/Heart.svg')",
        "Hazelnut-Latte": "url('/src/assets/Home/product/Hazelnut-Latte.webp')",
        "profile-testimony-right": "url('/src/assets/Home/Profile/Profile-left.svg')" 
      },
      fontFamily: {
        "rubik": "'Rubik', sans-serif",
      }
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
};
