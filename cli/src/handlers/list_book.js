const fs = require('fs');
const path = require('path');

const getFiles = () => {
  const pathName = path.join(__dirname, '../../data/books/');
  return new Promise((resolve, reject) => {
    fs.readdir(pathName, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

const readFileJSON = (fileName) => {
  const pathName = path.join(__dirname, '../../data/books/', fileName);
  return new Promise((resolve, reject) => {
    fs.readFile(pathName, { encoding: 'utf-8' }, (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
}

const list = async () => {
  const files = await getFiles();

  files.forEach(async file => {
    const data = await readFileJSON(file)
    // console.table(data);
    console.log(`[${data.bookAuthor}] ${data.bookName}`)
  });
}

module.exports = list;