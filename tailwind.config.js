module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        weak: '#d1d5db',
        normal: '#6b7280',
        strong: '#1f2937',
      },
      screens: {
        mlg: '992px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
