import type { Config } from 'tailwindcss'
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgWhite: "#FCFCFD",
        primaryGreen: "#04B90B",
        textBlack: "#23262F",
        formBlack: '#141416',
        textNeutralBlack: "#777E90",
        paraTextColor: "#353945",
        bgGreen: "#DDF3D8",
        neutralWhite: "#F4F5F6",
        neutralLineWhite: "#E6E8EC"
      },
      boxShadow: {
        'lg': '0px 10px 27px 0px rgba(53,53,53,0.05)',
        'xl': '5px 9px 16px 0px rgba(0,0,0,0.04)'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        alice: ['var(--font-alice)', ...fontFamily.sans]
      },
      tracking:{
        tight: '-0.0225rem',
        wide: '-0.0175rem',
        wider: '-0.01rem'
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1024px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}
export default config
