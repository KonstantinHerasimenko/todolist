import type { Config } from "tailwindcss";

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
		},
	},
	plugins: [],
}
export default config;
