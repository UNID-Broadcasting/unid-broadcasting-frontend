/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['/public/index.html', './src/**/*.jsx'],
	theme: {
		extend: {
			colors: {
				'unid-yellow': '#FBBC15',
				'unid-indigo': '#232037',
			},
		},
	},
	plugins: [],
}
