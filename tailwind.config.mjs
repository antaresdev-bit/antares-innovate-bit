/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'primary-blue': '#22379A',
				'dark-purple': '#0E051C',
			},
			backgroundImage: {
				'radial-gradient': 'radial-gradient(ellipse at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 40%)',
			},
			zIndex: {
				'-1': '-1',
			},
			screens: {
				'2xl': '1500px',
				'3xl': '1920px'
			},

		},
	},
	plugins: [
		require("tailwindcss-animate"),
	],
};
