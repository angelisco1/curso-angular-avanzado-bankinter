import * as express from 'express'

const router = express.Router()

const nuevosDigimons = [
  { name: 'Gammamon', img: 'https://static.wikia.nocookie.net/digimon/images/0/0b/Gammamon_b.jpg', level: 'rookie' },
  { name: 'BetelGammamon', img: 'https://static.wikia.nocookie.net/digimon/images/c/c2/BetelGammamon_b.jpg', level: 'champion' },
]


router.get('/nuevos-digimons', (req, res) => {
  return res.json(nuevosDigimons)
})

router.post('/nuevos-digimons', (req, res) => {
  const datos = req.body
  nuevosDigimons.push(datos)
  return res.status(201).json({ ok: true })
})

export const ApiRoutes = router
