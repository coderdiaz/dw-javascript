// Callback
const readFile = function (path, callback) {
  console.log("Filename: " + path)
  // Read the file: data.json
  const data = {
    results: [
      {
        id: "1",
        name: "Pepe"
      }
    ]
  };

  callback(data)
}

readFile("./data.json", function(data) {
  console.log(data)
})
// Filename: ./data.json