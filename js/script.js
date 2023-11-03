// Método de entrada
var nombre = prompt("Por favor, introduce tu nombre:");

// Método de salida
console.log("Hola, " + nombre + "! Bienvenido a mi programa.");

// Ciclo (for)
for (var i = 1; i <= 5; i++) {
  console.log("Este es el paso " + i + " del ciclo.");
}

// Estructura condicional (if)
var edad = parseInt(prompt("Por favor, introduce tu edad:"));
if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// Función
function suma(a, b) {
  return a + b;
}

var num1 = parseFloat(prompt("Introduce el primer número:"));
var num2 = parseFloat(prompt("Introduce el segundo número:"));

var resultado = suma(num1, num2);
console.log("La suma de " + num1 + " y " + num2 + " es igual a " + resultado);

 // Objeto para almacenar datos del usuario
 var usuario = {};

 // Arreglo para almacenar mensajes
 var mensajes = [];

 // Función para agregar un mensaje al arreglo
 function agregarMensaje(mensaje) {
     mensajes.push(mensaje);
 }

 // Función para mostrar el resultado en el DOM
 function mostrarResultado() {
     var nombre = document.getElementById("nombre").value;
     var edad = document.getElementById("edad").value;

     // Guardar datos en el objeto usuario
     usuario.nombre = nombre;
     usuario.edad = edad;

     // Agregar un mensaje al arreglo
     agregarMensaje("Nombre: " + usuario.nombre);
     agregarMensaje("Edad: " + usuario.edad);

     // Mostrar mensajes en el DOM
     var resultadoDiv = document.getElementById("resultado");
     resultadoDiv.innerHTML = mensajes.join("<br>");
 }