/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    
    
    // container: {
    //   center: false,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "2rem",
    //     md: "4rem",
    //     lg: "6rem",
    //     xl: "8rem",
    //     "2xl": "12rem",
    //     "3xl": "16rem",
    //     "4xl": "20rem",
    //   },
    //   margin: {
    //     DEFAULT: "1rem",
    //     sm: "2rem",
    //     md: "4rem",
    //     lg: "6rem",
    //     xl: "8rem",
    //     "2xl": "12rem",
    //     "3xl": "16rem",
    //     "4xl": "20rem",
    //   },
    // },
    extend: {
      colors: {
        primary:'#d5d5d5', 
        secondary: {
          100: "#212529", 
          200: "#a18a4d"
        
        }, 
        third: {
          100: "#a18a4d",
          200: "#212529"
        }, 
        fourth: {
          100: "#f2f2f2", 
        }
      }, 

    },
    fontFamily : {
      body: ["Lato"]
    },
  },
  plugins: [],
}