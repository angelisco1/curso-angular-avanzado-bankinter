const express = require('express')
const webpush = require('web-push')
const cors = require('cors')
const axios = require('axios')

const app = express()

webpush.setVapidDetails(
  'mailto:curso@angular.com',
  'BJ1h9PlNsj3WJYTgSic42UA6zQFr6h6hC0sbjjHdnxt2ziaure2W9CEh18upyBAK_XQnHIHNrvS0DaIFoV3RzVo',
  'mgkpvVckFP0XTe4mZo-RT4CsaZSTfgNwjqjn_6dg-W4'
)

app.use(cors())
app.use(express.json())

app.post('/ofertas', (req, res) => {
  const oferta = req.body

  axios.post('http://localhost:3000/ofertas', oferta)
    .then(resp => {

      // Obtener las suscripciones
      axios.get('http://localhost:3000/suscripciones')
        .then(resp => {
          const suscripciones = resp.data
          const notificacion = {
            notification: {
              body: `${oferta.titulo} (${oferta.salario}€)`,
              title: 'Nueva oferta de ' + oferta.empresa,
              icon: 'https://cdn-images-1.medium.com/max/1200/1*hPpHALp_6z2UaX2rqqoYAQ.png'
            }
          }
          const payload = JSON.stringify(notificacion)

          suscripciones.forEach(suscripcion => {
            // Enviar notificaciones push
            webpush.sendNotification(suscripcion, payload)
              .then(() => {
                console.log('Notificación enviada')
              })
              .catch(err => {
                console.log(err)
              })
          })

        })

      // Devolver resp al front
      return res.status(201).json(resp.data)
    })

})


app.listen(3005, () => {
  console.log('Listening on http://localhost:3005')
})