/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      'xs': '360px',    // Custom extra-small breakpoint
      'sm': '640px',    // Override small breakpoint
      'md': '768px',    // Override medium breakpoint
      'lg': '1024px',   // Override large breakpoint
      'xl': '1280px',   // Override extra-large breakpoint
      '2xl': '1536px',  // Override 2xl breakpoint
      'xxl': '1920px',  // Custom extra-large breakpoint
      'bp':'1140px'
    },
  }
}