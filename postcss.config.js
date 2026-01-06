export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}, // autoprefixer is usually included in v4 plugin but keeping it doesn't hurt unless conflict. v4 docs say just @tailwindcss/postcss.
  },
}
