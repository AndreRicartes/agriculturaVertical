module.exports = {
  content: [
    './**/*.{html,php,js}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores primárias
        'green-tech': '#00A86B',
        'blue-digital': '#0078D4',
        'gray-modern': '#6B7280',
        
        // Cores secundárias
        'green-light': '#4ADE80',
        'blue-light': '#60A5FA',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}