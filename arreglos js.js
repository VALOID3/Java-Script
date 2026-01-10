
//EJERCICIO 1
let canciones = ["Odoriko-Vaundi", "stay with me-Miki Matsubara", "Error-The Warning"];
console.log(canciones);

//EJERCICIO 2
console.log(canciones[0]);
console.log(canciones[2]);

//EJERSICIO 3
canciones[1] = "Next Level-Aespa";
console.log(canciones);

//EJERSICIO 4
let mochila = [];

mochila.push("linterna", "mapa");

console.log(mochila.length);


//EJERSICIO 5
let tareas = ["lavar ropa", "estudiar js", "dormir"];
tareas.pop();
console.log(tareas)

//Ejersicio 6
let fila = ["Ana", "Beto", "Carla"];
fila.unshift("Daniel");
console.log(fila);

//EJERSICIO 7
fila.shift();
console.log(fila);

//EJERSICIO 8
let puntuaciones = [10, 20, 50];

let total  = puntuaciones[0] + puntuaciones[2];
console.log(total)

//Ejersicio 9
let personaje = ["thor", 50, true];
console.log(personaje);

//Ejersicio 10
let invitados = ["Karla", "Miguel", "Luis", "Jose"];

if(invitados.length > 5){
    console.log("demasiado gente. aforo lleno");
}else{
    console.log("pase adelante, hay espacio");
}