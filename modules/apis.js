const fs = require("fs")
const path = require("path")

const pathname = path.join(__dirname, "ejemplo.txt")
// /Users/coderdiaz/github.com/dw-bedu/modules/ejemplo.txt

// Reading file
fs.readFile(pathname, { encoding: "utf-8" }, (err, data) => {
  if (err) throw err
  console.log(data)
})

const pathNameNewfile = path.join(__dirname, "nuevoarchivo.txt")
// Writing file
fs.writeFile(pathNameNewfile, 'Pepe pecas pica papas con un pico', { encoding: "utf-8" }, (err) => {
  if (err) throw err

  console.log("New file created")
})

const pathNameAlterFile = path.join(__dirname, "modificable.txt")
// Alter file
fs.appendFile(pathNameAlterFile, "Este es contenido nuevo del archivo\n", (err) => {
  if (err) throw err
  console.log('AppendFile Successfuly')
})

// fs.rm()