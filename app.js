console.clear();
//controlo el proceso de argv
/** asi llega process.argv, es un array
 * [
  '/usr/bin/node',
  '/srv/http/Digital House/desafios/App 1/DH-Practica-AppV1/app.js',
  'hola'
]
*/

switch(process.argv[2])
{
    case 'undefined':
        console.log("Tienes que pasar una Acción");
        break;
    case 'listar':
        console.log("mensaje de Listar");
        break;
    default:
        console.log("No entiendo que quieres decir");
}



/**
 * Generar un archivo app.js que "consuma" el archivo de tareas.json. Para esto,seguramente nos convenga usar el módulo nativo de NodeJs. File System - FS */
const archivo = require('node:fs');

/**
 * Mostrar el listado de tareas existente por la terminal. Para esto, seguramente tengamos que guardar el contenido del archivo tareas.json en una variable y convertir la misma a un dato tipo array. ¿Se te ocurre cómo? Aquí te dejamos un enlace donde podrás profundizar sobre el recurso a utilizar:
 */
//traigo el JSON y lo convierto en ObjetoLiteral
let listaDeTareas = JSON.parse(archivo.readFileSync('./app-tareas/tareas.json','utf-8'));

//console.table(listaDeTareas);



/**
 * desafio 2
 * Permitir que al momento de ejecutar el archivo app.js desde la terminal con Node.js se pueda pasar un argumento después del nombre del archivo de lasiguiente manera:

a. node app.js listar
Si se escribe la palabra “listar” después del nombre del archivo, se
deberán listar todas las tareas existentes en el archivo tareas.json.

b. node app.js
Si NO se escribe ninguna palabra después del nombre del archivo,
en la terminal deberá aparecer el texto: Atención - Tienes que
pasar una acción.

c. node app.js cualquier texto
Si se llegase a pasar cualquier otro texto que no sea la palabra
listar, en la terminal deberá aparecer el texto: No entiendo qué
quieres hacer.
 */
console.log(process.argv);