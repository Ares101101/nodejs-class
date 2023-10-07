/* eslint-disable no-unused-vars */
const express = require('express')// require -----> commonJS
const movies = require('./movies.json')// require
const app = express()

app.disable('x-powered-by')// disable header express

app.get('/movies', (req, res) => {
  res.json(movies)
})
app.get('/movies/:id', (req, res) => { // path-to-regexp
  const { id } = req.params
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`server listening on por http://localhost:${PORT}`)
})
