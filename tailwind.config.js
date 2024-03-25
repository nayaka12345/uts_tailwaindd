/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        f1: "#31A0FE",
        f2: "#23856D",
        f3: "#EC5C2E",
        f4: "#E1f4FF",
        df1: "#394264",
        df2: "#088da4",
        df3: "#e31919",
        df4: "#ffffff",
        df5: "#ffa500",
        df6: "#088da4",
        df7: "#000000"
      },
      backgroundImage: {
        bg1 : "url('../img/cp-bg.png')",
        bg2 : "url('../img/cp-bg-2.png')",
        df1: "url('../img/bg-dark-header.png')",
        df2 : "url('../img/bg-dark-content.png')",
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

