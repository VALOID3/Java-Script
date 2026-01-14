
//Ejersicio 1: El Saludo (forEach): Tienes let nombres = ["Juan", "Pedro", "Maria"];. Usa forEach para imprimir "Bienvenido [nombre]" por cada uno.
let nombres = ["juan", "pedro", "maria"];

nombres.forEach(function (name) {
    console.log("bien venido " + name);
});

nombres.forEach((names) => {
    console.log(`bien benido ${names}`);
})

//Ejersicio 2: El Doble (map): Tienes let numeros = [2, 4, 6];. Usa map para generar un nuevo array con los números multiplicados por 2. Imprímelo.
let Numeros = [2, 4, 6];

let Numerosx2 = Numeros.map(num => num * 2);
console.log(Numerosx2);

//Ejersicio 3: Solo Mayores (filter): Tienes let edades = [10, 18, 25, 15, 30];. Usa filter para generar un array solo con los números mayores o iguales a 18.
let edades = [10, 18, 25, 15, 30];

const datemayo = edades.filter(filtro => filtro >= 18);
console.log(`${datemayo} es mayor o igual a 18`);

//Ejersicio 4: A Mayúsculas (map): Tienes let frutas = ["manzana", "pera"];. Usa map y .toUpperCase() para crear un array con los nombres en mayúsculas.
let frutas = ["manzana", "pera"];

const fruitsMay = frutas.map(fruts => fruts.toUpperCase());
console.log(fruitsMay);

//Ejersicio 5: Solo Pares (filter): Tienes let lista = [1, 3, 4, 6, 7];. Filtra solo los números pares (num % 2 === 0).
let lista = [1, 3, 4, 6, 7];

const pares = lista.filter(num => num % 2 === 0);
console.log(pares);

//Ejersicio 6: Impuestos (map): Tienes let precios = [100, 200, 300];. Crea un nuevo array agregándoles el IVA (multiplica por 1.16).
let precios = [100, 200, 300];

const preciva = precios.map(num => num * 1.16);
console.log(preciva);

//Ejersicio 7: El Buscador (filter): Tienes let palabras = ["hola", "adiós", "sol", "luna"];. Filtra las palabras que tengan menos de 4 letras (.length < 4).
let palabras = ["hola", "adios", "sol", "luna"];

const palabshort = palabras.filter(num => num.length < 4);
console.log(palabshort);

//Ejersicio 8: Extracción de Datos (map): Tienes una lista de objetos: [{nombre: "A"}, {nombre: "B"}]. Usa map para crear un array que tenga solo los strings de los nombres: ["A", "B"].
let persona1 = [{ nombre: "A" }, { nombre: "B" }];

const mayus = persona1.map(num => num.nombre);
console.log(mayus);

//Ejersicio 9: Usuarios Activos (filter): Tienes [{user: "a", active: true}, {user: "b", active: false}]. Filtra y quédate solo con los objetos donde active sea true.
let Usuarios = [
    { user: "A", activite: true },
    { user: "B", activite: false }
];

const UserActivos = Usuarios.filter(num => num.activite == true);
console.log(UserActivos);

//Ejersicio 10: El Contador (forEach): Tienes let votos = ["si", "no", "si", "si"];. Usa forEach para contar cuántos "si" hay (necesitarás una variable contador afuera).
let votos = ["si", "no", "si", "si"];
let contador = 0;
votos.forEach(num => {
    if (num == "si") {
        contador++;
    }
});

console.log(contador);

//Problema A: "Limpieza de Base de Datos"
/*
Tu backend te envió una lista de correos de usuarios, pero algunos vinieron "basura" (vacíos o nulos). Tu jefe necesita una lista limpia para enviar un newsletter.

Datos: let correos = ["juan@mail.com", null, "pedro@mail.com", "", "ana@mail.com", undefined];

Misión: Genera un array que contenga solo los correos válidos (textos reales).
*/
let correos = ["juan@mail.com", null, "pedro@mail.com", "", "ana@mail.com", undefined];

const CorreoValid = correos.filter(nume => {
    if (typeof nume === "string") {  //condicion para validar que estamos trbajando con strings 
        if (nume.length === 0) {   //usamos length para saber la longitud del string y != 0
            console.log(`correo vacio ${nume}`);
            return false;  // descartamos porque es un string vacio
        } else {
            console.log(`correo: ${nume}`);
            return true;  //retornamos true para agregar que es un string
        }
    } else {
        console.log(`no es un string`);
        return false  //descartamos que no es un string (null, undefine)
    }
})

console.log(`nuevo array de puros correos: ${CorreoValid}`);

/*
Problema B: "El Reporte de Sueldos"
Tienes la lista de empleados con sus sueldos mensuales brutos. Recursos Humanos necesita saber cuánto ganan netos al año (multiplicar por 12 y restarles el 10% de impuestos).

Datos:

JavaScript

let empleados = [
    { nombre: "Luis", sueldo: 1000 },
    { nombre: "Ana", sueldo: 2000 },
    { nombre: "Beto", sueldo: 1500 }
];
Misión: Genera un nuevo array de números que contenga solo el sueldo anual neto de cada uno.
*/
let empleados = [
    { nombre: "Luis", sueldo: 1000 },
    { nombre: "Ana", sueldo: 2000 },
    { nombre: "Beto", sueldo: 1500 }
];

const SueldoAnualNeto = empleados.map(element => {
    return {
        nombre: element.nombre, //retornamos el nombre
        sueldoNeto: (element.sueldo * 12) * 0.9  //aplicamos la operacion  aritmetica y retornamos sueldo neto
    };
});
console.log(SueldoAnualNeto);

/*
Problema C: "El Buscador de Productos"
Estás haciendo una barra de búsqueda para una tienda online. El usuario escribió "Camisa" y quiere ver todo lo que coincida.

Datos:

JavaScript

let inventario = [
    { nombre: "Camisa Azul", precio: 200 },
    { nombre: "Pantalón Negro", precio: 400 },
    { nombre: "Zapatos", precio: 600 },
    { nombre: "Camisa Blanca", precio: 250 }
];
Misión: Genera un array de objetos que contenga solo los productos cuyo nombre incluya la palabra "Camisa".

(Pista: Los strings tienen un método llamado .includes("texto") que devuelve true o false).
*/
let inventario = [
    { nombre: "Camisa Azul", precio: 200 },
    { nombre: "Pantalón Negro", precio: 400 },
    { nombre: "Zapatos", precio: 600 },
    { nombre: "Camisa Blanca", precio: 250 }
];


const filterCamisa = inventario.filter(elemto => elemto.nombre.includes("Camisa"));  //usamos el metodo .includes() verificar TRUE=Camisa

console.log(filterCamisa);
