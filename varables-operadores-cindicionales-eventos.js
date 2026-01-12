const productoPre = 100;
let cantCompra = 4;

let total = cantCompra * productoPre



let cantidad = 15;

if (cantidad > 10 && cantidad != 20) {
  console.log("¡regalo!");
}
if (cantidad == 20) {
  console.log("!super descuento¡")
}
else {
  console.log("gracias por tu compra")
}


for (let i = 5; i >= 1; i--) {
  console.log("cuenta regresiva =" + i)
}

  //funciones

function calcularTotal(precio, cantidad) {
  let total = precio * cantidad;
  return total;
}

function CalcularArea(base, altura) {
  let area = base * altura;
  return area;
}

function crearNombreCompleto(nombre, apellido) {
  return (nombre + " " + apellido);
}

function puedePasar(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

function agregarImpuesto(precio) {
  let iva = 0.16 * precio;
  precio = precio + iva;
  return precio;
}




function calcularTotalFinal(precio, cantidad) {
  let subtotal = precio * cantidad;

  if (subtotal > 1000) {
    let descuento = subtotal * 0.90;
    return descuento;
  } else {
    return subtotal;
  }
}

let parrado = document.querySelector(".advertencia");
parrado.innerHTML = "¡CUIDADO!";




let selector = document.querySelectorAll(".item");
if (selector = 1) {
  selector.style.color = "green";
}





const imagen = document.getElementById("fotoPerfil")
imagen.src = "foto_nueva.jpg";






const input = document.getElementById("nombreUsuario").value.trim();
const nombreuser = input;
if (nombreuser === "") {
  console.log("campo vacio");
}
else {
  console.log("el nombre es:" + " " + nombreuser);
}




/* TEMA DE EVENTOS JAVA SCRIPT*/

const boton = document.getElementById("botonLuz");

boton.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  boton.innerHTML = "Encender";
});







const usuario = document.getElementById("textoUsuario");
const resul = document.getElementById("resultado");

usuario.addEventListener("input", function(){
  const user = usuario.value.trim();
   resul.innerHTML = user;
});







const caja = document.getElementById("caja");

caja.addEventListener("mouseover", function(){
  caja.style.backgroundColor = "blue";
});

caja.addEventListener("mouseout", function(){
  caja.style.backgroundColor = "red";
});







const forms = document.getElementById("miFormulario")

forms.addEventListener("submit", function(e){
  e.preventDefault();
  console.log("Envío detenido con éxito");
});