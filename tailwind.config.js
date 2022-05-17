module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        weak: '#CBE3E6',
        normal: '#63ACB6',
        strong: '#377580',
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
