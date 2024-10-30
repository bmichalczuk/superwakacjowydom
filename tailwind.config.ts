import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				red: "var(--red)",
			},
			backgroundImage: {
				hero1: "url(/hero/hero1.jpg)",
				hero2: "url(/hero/hero2.jpg)",
				hero3: "url(/hero/hero3.jpg)",
				hero4: "url(/hero/hero4.jpg)",
			},
		},
	},
	plugins: [],
};
// eslint-disable-next-line import/no-default-export
export default config;
