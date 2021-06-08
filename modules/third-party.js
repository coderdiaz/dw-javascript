const { format } = require("date-fns")
const { es } = require("date-fns/locale")
const { PI, EULER, add, substract, multiplication, division } = require("./arithmetic");

const newDate = new Date();
console.log(
  format(newDate, "'Hoy es' eeee", { locale: es })
)

console.log("Calcula el área con un radio de 2", PI * 2 * 2)
console.log("2 + 2", add(2, 2))
console.log("4 - 4", substract(4, 4))
console.log("4 * 2", multiplication(4, 2))
console.log("120 / 20", division(120, 20))