const { crearTarea, listarTareas, actualizarTarea, borrarTarea } = require('./toDo/toDo');

//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tareaPorHacer = crearTarea(argv.descripcion, argv.completado);
        console.log(tareaPorHacer);
        break;
    case 'listar':
        let listado = listarTareas();
        for (let tarea of listado) {
            console.log('=====TO DO ======='.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log("Estado: ", tarea.completado);
            console.log('=====TO DO ======='.green);
        }

        break;
    case 'actualizar':
        let actualizado = actualizarTarea(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = borrarTarea(argv.descripcion)
        console.log(borrado);
        break;
    default:
        console.log("Comando no válido  o no reconocido");
}