const http = require('http')

const { findAvaliablePort } = require('./10.free-port')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('hello world')
})

findAvaliablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`server running on port http://localhost:${port}`)
  })
})
