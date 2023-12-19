import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
		colors: {
			blue: '#001D5D',
			green: '#42A418',
			paleGreen: '#D9F0D0',
			gray: '#777777',
			lightGray: '#F6F6F6',
			paleBlue: '#B8BFCF',
		},
      	backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			'gradient-conic':
			'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		},
	},
  },
  plugins: [],
}
export default config
