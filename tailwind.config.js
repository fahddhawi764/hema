// tailwind.config.js
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
          DEFAULT: '#1e40af',
          hover: '#1d4ed8',
        },
        secondary: {
          DEFAULT: '#64748b',
        },
      },
      spacing: {
        'section': '2rem',
        'container': '1rem',
        // هنا تم إضافة أحجام مسافات/أبعاد مخصصة
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
      },
      borderRadius: {
        'container': '0.75rem',
      },
      fontFamily: {
        'arabic': ['Tajawal', 'Arial', 'sans-serif'],
      },
      // أضف هذا القسم لتحديد صور الخلفية
      backgroundImage: {
        'hero-bg-image': "url('/images/hero-bg.jpg')", // اسم الصورة ومسارها
      },
    },
  },
  plugins: [],
}