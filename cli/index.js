const inquirer = require('inquirer');
const ManageBookInit = require('./src/actions/manage_books');

console.log("Hola, Bienvenido al Sistema de Biblioteca 0.0.0 \n");

inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: '¿Qué quieres hacer hoy?',
      choices: [
        { name: 'Gestionar libros', value: 'MANAGE_BOOKS' },
        { name: 'Consultar alumno', value: 'GET_STUDENT' },
      ],
    },
  ])
  .then(answers => {
    switch(answers.action) {
      case 'MANAGE_BOOKS':
        ManageBookInit();
        break;
      case 'GET_STUDENT':
        break;
    }
  }).catch(err => {
    if (err.isTtyError) throw err;
    console.log(err);
  });
