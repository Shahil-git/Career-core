import daisyui from './node_modules/daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Lobster: ["Lobster"],
      Manrope: ["Manrope"],
      SiyamRupali:["SiyamRupali , sans-serif"]
    }
  },
  plugins: [daisyui],
}