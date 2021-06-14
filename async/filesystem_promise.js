const fs = require('fs')
const path = require('path')

const pathname = path.join(__dirname, "ejemplos.txt")
// /Users/coderdiaz/github.com/dw-bedu/modules/ejemplo.txt

// Reading file
// fs.readFile(pathname, { encoding: "utf-8" }, (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

const readFile = (pathname) => new Promise((resolve, reject) => {
  fs.readFile(pathname, { encoding: "utf-8" }, (err, data) => {
    if (err) reject(err)
    resolve(data)
  })
})

const init = async () => {
  const data = await readFile(pathname)
  if (!data) return

  console.log(data)
  console.log('Este debería ir al final')
}

init()