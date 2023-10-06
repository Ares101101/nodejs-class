const http = require('node:http')// protocol http
const fs = require('node:fs')
const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html ; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200 // ok
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/imagen-bonita.jpg') {
    fs.readFile('./main_image_star-forming_region_carina_nircam_final-5mb.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error </h1>')
      } else {
        res.setHeader('Content-type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // ok
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // not found
    res.end('<h1>Error 404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server running on port http://localhost:${desiredPort}`)
})
