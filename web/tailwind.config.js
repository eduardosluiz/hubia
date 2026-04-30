/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712", // Quase preto azulado
        card: "rgba(17, 24, 39, 0.7)", // Transparência Glassmorphism
        neon: {
          purple: "#8B5CF6",
          blue: "#3B82F6",
          green: "#10B981",
        }
      },
      backgroundImage: {
        'mesh-gradient': "radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
