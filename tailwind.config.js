/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '1024px',
			lg: '1280px',
		},
		extend: {
			backgroundImage: {
				'smart-bg': "url('/logo_Smart.webp.png')",
			},
		},
	},
	plugins: [],
};
