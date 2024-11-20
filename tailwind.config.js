/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/preline/dist/*.js'
      ],
      theme: {
		extend: {
			colors: {
				brand: "#447649",
			},
		},
	},
  plugins: [require('preline/plugin')],
}

