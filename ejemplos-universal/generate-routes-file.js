const fs = require('fs').promises
const axios = require('axios')

axios.get('https://digimon-api.vercel.app/api/digimon')
  .then(resp => {
    const digimons = resp.data
    const arrRoutes = digimons.map(digi => `/digimons/${digi.name}`)
    const txtRoutes = arrRoutes.join('\n')

    return fs.writeFile('rutas-digimons.txt', txtRoutes)
  })
  .then(() => {
    console.log('Archivo de rutas creado 😀')
  })