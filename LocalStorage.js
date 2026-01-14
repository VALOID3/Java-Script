/*
Parte 1: Drills de Sintaxis (10 Ejercicios)
Objetivo: Memorizar los 4 comandos básicos de LocalStorage.

Guardando el Nombre (setItem): Guarda un item con la clave "nombre" y el valor "TuNombre". */

localStorage.setItem("nombre","TuNombre");

/*Leyendo el Nombre (getItem): Crea una variable miNombre y asígnale lo que guardaste en el ejercicio anterior. Imprímela en consola. */
let miNombre = localStorage.getItem("nombre");
//console.log(`Imprimiendo el LocalStorage: ${miNombre}`);
console.log("Script cargado correctamente")