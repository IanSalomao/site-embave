/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B3A6B',
          dark: '#122849',
          light: '#2C5490',
        },
        accent: {
          DEFAULT: '#F5B81C',
          dark: '#D89E0A',
          light: '#FFD45C',
        },
        offwhite: '#F8F9FB',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(27, 58, 107, 0.08)',
        medium: '0 10px 40px rgba(27, 58, 107, 0.12)',
        strong: '0 20px 60px rgba(27, 58, 107, 0.18)',
      },
      backgroundImage: {
        'dots-blue': 'radial-gradient(circle, #C8CDD6 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '24px 24px',
      },
    },
  },
  plugins: [],
}
