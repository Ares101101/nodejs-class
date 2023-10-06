const http = require('http')
const { findAvaliablePort } = require('./10.free-port')
const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('hello world')
})

findAvaliablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server running on port http://localhost:${port}`)
  })
})
