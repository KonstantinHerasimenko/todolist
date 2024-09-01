import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'grim-purple': '#4b098b',
				'quiet-abyss': '#17032b',
				'cotinga-purple': '#31065b',
				'white-05': 'rgba(0,0,0,0.5)',
				'lavendar-wisp': '#e8eaed',
			},
			fontSize: {
				'heading-1': '4rem',
				'heading-2': '3rem',
				'body-1': '1.25rem',
				'body-2': '0.875rem',
			},
		},
	},
	plugins: [],
}
export default config
//64 48 20 14
