module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'space': ['Space Mono', 'Helvetica'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
