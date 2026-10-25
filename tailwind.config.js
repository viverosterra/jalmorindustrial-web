/** Configuración única para todo el sitio (antes vivía repetida en cada página con el CDN). */
module.exports = {
  content: ['./*.html', './blog/*.html', './costa-afuera/*.html', './alimentacion-y-hoteleria/*.html', './en/*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0A1628',
          800: '#0F2040',
          700: '#1A3055',
          600: '#1D4ED8',
          500: '#2563EB',
          400: '#3B82F6',
          accent: '#F59E0B',
          accentDark: '#D97706',
          steel: '#64748B',
          light: '#F1F5F9',
        },
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
