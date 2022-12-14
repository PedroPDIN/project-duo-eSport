/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', 'index.html'], // aonde vão esta os arquivos/components html que vai receber as classes do tailwind
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // substituir a fonte padrão do tailwind para a nova fonte que no caso para o "Inter"
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')", // criando a nossa "classe" no tailwind
        'nlw-gradient': 'linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}
