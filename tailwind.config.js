/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				textPrimary: '#9A9A9A',
				bgPrimary: '#F2F2F2',
			},
		},
	},
	plugins: [],
}
