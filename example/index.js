const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(function (req, res) {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello World!</h1>')
})

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}`)
})