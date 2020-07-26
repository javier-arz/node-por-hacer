/**
 * Require
 */
const colors = require('colors');
const fs = require('fs');;
let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('DB/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

let listarTareas = () => {
    cargarDB();
    return listadoPorHacer;
}

let crearTarea = (descripcion, completado) => {

    cargarDB();
    let porHacer = {
        descripcion: descripcion,
        completado: completado
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}

let actualizarTarea = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

let borrarTarea = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index);
        guardarDB();
        return true;
    } else {
        return false;
    }
}


// Se pueden exportar las funciones de forma globañ
module.exports = {
    crearTarea: crearTarea,
    listarTareas: listarTareas,
    actualizarTarea: actualizarTarea,
    borrarTarea: borrarTarea
}