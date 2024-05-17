/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    
    
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "12rem",
        "3xl": "16rem",
        "4xl": "20rem",
      },
      margin: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "12rem",
        "3xl": "16rem",
        "4xl": "20rem",
      },
    },
    extend: {
      colors: {
        primary:'#d5d5d5', 
        secondary: {
          100: "#212529", 
          200: "#a18a4d"
        
        }, 
        third: {
          100: "#a18a4d",
        }
      }, 

    },
    fontFamily : {
      body: ["Lato"]
    },
  },
  plugins: [],
}