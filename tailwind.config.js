/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        night:{
          DEFAULT:"#0D1120",
          50:"#171E2C",
          500:"#0D1120"
        }
      } ,
      keyframes:{
        float:{
          "0%,100%":{
            transform:"translateY(0)"
          },
          "50%":{
            transform:"translateY(-10px)"
          }
        }
        ,
        fadein:{
          "0%":{
            opacity:"0",
          "100%":{opacity:"1"}
          }
        }
      } ,
      animation:{
        float:"float 4s ease-in-out  infinite",
        fadein:"fadein 1s ease-in-out"
      }
    },
  },
  plugins: [],
};