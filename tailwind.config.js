module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#070d18' ,
        'secondary' : '#41BBEA',
        'rgba-white' : 'rgba(255, 255, 255, 0.29)',
        'rgba-white2' : 'rgba(255, 255, 255, 0.44)',
        'rgba-white3' : 'rgba(255, 255, 255, 0.15)',
        'rgba-white4' : 'rgba(255, 255, 255, 0.36)',
        'rgba-gray' : 'rgba(196,196,196,0.19)'
         
      },
      rotate : {
        '360' : '360deg'
      }
    },
  },
  plugins: [],
}