const opts = {
    descripcion: {
        demand: true, //significa obligatorio
        alias: 'd', // 'b' puede usarse como alias de 'base'
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: false, //se puede especificar valor por defecto si no es ingresado desde la consoloa
        desc: "Indica si la tarea se terminó"
    }
}

const descripcion = {
    demand: true, //significa obligatorio
    alias: 'd', // 'b' puede usarse como alias de 'base'
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true, //se puede especificar valor por defecto si no es ingresado desde la consoloa
    desc: "Indica si la tarea se terminó"
};

/**
 * Require
 */

const argv = require('yargs')
    .command('listar', 'Listar las tares por hacer')
    .command('crear', 'Crear tarea por hacer', opts)
    .command('actualizar', 'Actualizar tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

// Paquete de los módulos de node
module.exports = {
    argv
}