const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const createFile = (filename, content) => {
  return new Promise((resolve, reject) => {
    const pathName = path.join(__dirname, '../../data/books', `${filename}.json`);
    fs.writeFile(pathName, JSON.stringify(content), { decoding: 'utf-8' }, (err) => {
      if (err) reject(err)
      resolve()
    })
  });
}

const register = () => {
  inquirer.prompt([
    {
      name: 'bookName',
      message: 'Introduce el nombre del libro'
    },
    {
      name: 'bookISBN',
      message: 'Introduce el ISBN',
    },
    {
      name: 'bookAuthor',
      message: 'Introduce el/los nombres del/los autor/es',
    },
    {
      type: 'list',
      name: 'category',
      message: 'Selecciona una categoría',
      choices: [
        { name: 'Ciencia', value: 'ciencia' },
        { name: 'Programación', value: 'programacion' },
        { name: 'Ciencia Ficcion', value: 'ciencia-ficcion' }
      ],
    },
  ]).then(async answers => {
    await createFile(answers.bookName, answers)
      .then(() => console.log('El libro ha sido registrado ✅'))
      .catch(err => {
        throw err
      });
  });
}

module.exports = register;
