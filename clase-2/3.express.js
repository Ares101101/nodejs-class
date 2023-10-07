const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()

app.disable('x-powered-by')

app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''
  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request
    req.body = data
    next()
  })
})

const PORT = process.env.PORT ?? 3000

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})
app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})
app.use((req, res) => {
  res.status(404).send('<div>404</div>')
})

app.listen(PORT, () => {
  console.log(`server listening on por http://localhost:${PORT}`)
})
