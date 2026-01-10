//NIVEL 1

//1/

let miPc = {
    marca: "ASUS",
    ram: 16,
    tieneGrafica: true
};

//2
console.log(miPc.ram);

//3
miPc.ram = miPc.ram * 2;
console.log("RAM:" + miPc.ram);

//4
miPc.Disco = "SSD 1tb";
console.log("Disco: " + miPc.Disco)

//5
delete miPc.tieneGrafica;
console.log(miPc);

//NIVEL 2

//6
let persona = {
nombre: "Armando",
edad: 17
};

if(persona.edad >= 18){
    console.log("es mayor de edad");
}else{
    console.log("es menos de edad");
}

//7
let articulo = {
    nombre: "galletas",
    precio: 20,
    cantidad: 5
};

let TotalPagar = articulo.precio * articulo.cantidad;

//8
let estudiante ={
    nombre: "luis",
    Calificacion: {ingles: 9, Matematicas: 10}
};
console.log(estudiante.Calificacion.ingles);

//9
let ListaProductos = [{nombre: "pastel"}, {nombre:"carne"}];
console.log(ListaProductos[1].nombre);

//10
let producto ={
    nombre: "tv",
    stock: 0
};

producto.stock = 5;

if(producto.stock > 0){
    console.log("hay disponible");
}else{
    console.log("agotado");
}

//Ejersicio de logica
let alumno ={
    nombre: "Armando",
    Calificaciones: {
        espaniol: 100,
        ingles: 80,
        matematicas: 70 
    }
};

const Promedio = (alumno.Calificaciones.espaniol + alumno.Calificaciones.ingles + alumno.Calificaciones.matematicas) / 3;
console.log(Promedio);

if(Promedio >= 70){
    console.log("Aprobado: " + Promedio);
}else{
    console.log("Reprobado: " + Promedio);
}


//Ejersicio plus
let ventas = [50, 20, 100, 30, 10];
let vaacumulable=0;

for(let i=0; i<ventas.length; i++){
    vaacumulable += ventas[i];
}

console.log(vaacumulable);