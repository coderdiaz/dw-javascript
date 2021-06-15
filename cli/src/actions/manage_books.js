const inquirer = require('inquirer');
const registerBook = require('../handlers/register_book');

const init = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'sub_action',
        message: '¿Qué acciones quieres ejecutar?',
        choices: [
          { name: 'Registrar un libro', value: 'REGISTER_BOOK' },
          { name: 'Ver libros', value: 'LIST_BOOK' },
        ], 
      },
    ])
    .then(answers => {
      switch(answers.sub_action) {
        case 'REGISTER_BOOK':
          registerBook();
          break;
      }
    });
};

module.exports = init;
