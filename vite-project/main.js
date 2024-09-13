//1. Introducción a JavaScript
//ej 2
let numA = 5;
let numB = 10;
let resultadoSuma = numA + numB;
console.log(`El resultado de numA(${numA}) + numB(${numB}) es: ${resultadoSuma}`);

//ej 3
let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
console.log(`¡Hola, ${nombreUsuario}! Bienvenido/a.`);



//2. Operadores lógicos y condicionales
//ej 1
let valorX = 10;
let valorY = 15;
let mayorValor = (valorX > valorY) ? valorX : valorY;
console.log(`El número mayor entre ${valorX} y ${valorY} es: ${mayorValor}`);

//ej2
let numeroIngresado = prompt("Ingresa un número:");
if (numeroIngresado % 2 === 0) {
    console.log(`El número ${numeroIngresado} es par.`);
} else {
    console.log(`El número ${numeroIngresado} es impar.`);
}



//3. Operadores de asignación y bucles
//ej 1
let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}

//ej 2
let numeroMayor;
do {
    numeroMayor = prompt("Ingresa un número mayor a 100:");
} while (numeroMayor <= 100);
console.log(`El número ingresado es: ${numeroMayor}`);



//4. Funciones de JavaScript
//ej 1
function esNumeroPar(valor) {
  return valor % 2 === 0;
}
console.log(esNumeroPar(4));  // true
console.log(esNumeroPar(7));  // false

//ej2
function convertirCelsiusAFahrenheit(gradosCelsius) {
  return gradosCelsius * 1.8 + 32;
}
let tempCelsius = 25;
console.log(`${tempCelsius} grados Celsius son ${convertirCelsiusAFahrenheit(tempCelsius)} grados Fahrenheit.`);



//5. Objetos en JavaScript
//ej 1
let personaInfo = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Buenos Aires",
  cambiarCiudad(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
  }
};

console.log(personaInfo);
personaInfo.cambiarCiudad("Córdoba");
console.log(personaInfo);

//ej 2
let libroInfo = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967,
  esAntiguo() {
      let anioActual = new Date().getFullYear();
      return anioActual - this.anioPublicacion > 10;
  }
};

console.log(libroInfo);
if (libroInfo.esAntiguo()) {
  console.log("El libro es antiguo.");
} else {
  console.log("El libro es reciente.");
}



//6. Arrays
//ej 1
let numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = numerosArray.map(function(numero) {
    return numero * 2;
});

console.log("Array original:", numerosArray);
console.log("Array multiplicado:", numerosMultiplicados);

//ej2
let arrayPares = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        arrayPares.push(i);
        if (arrayPares.length === 10) break;
    }
}

console.log("Los primeros 10 números pares son:", arrayPares);



// 7. Introducción al DOM
//ej 1
function cambiarColor() {
  let parrafos = document.querySelectorAll("p");
  parrafos.forEach(function(parrafo) {
      parrafo.style.color = "blue";
  });
}
window.cambiarColor = cambiarColor;

//ej 2
function mostrarAlerta() {
  let texto = document.getElementById("textoInput").value;
  alert("Has ingresado: " + texto);
}
window.mostrarAlerta = mostrarAlerta;



// 8. Eventos en DOM
//ej 1
function inicializarListaEventos() {
  let listaElementos = document.querySelectorAll("li");
  listaElementos.forEach(function(elemento) {
      elemento.addEventListener("click", function() {
          console.log("Has hecho clic en: " + elemento.textContent);
      });
  });
}
window.inicializarListaEventos = inicializarListaEventos;

//ej 2
function deshabilitarCampo() {
  let inputCampo = document.getElementById("campoTexto");
  inputCampo.disabled = true;
}
window.deshabilitarCampo = deshabilitarCampo;

function habilitarCampo() {
  let inputCampo = document.getElementById("campoTexto");
  inputCampo.disabled = false;
}
window.habilitarCampo = habilitarCampo;



// 9. LocalStorage
//ej 1
function guardarEmail() {
  let email = document.getElementById("emailInput").value;
  localStorage.setItem("correoElectronico", email);
  mostrarEmailGuardado();
}
window.guardarEmail = guardarEmail;

function mostrarEmailGuardado() {
  let emailGuardado = localStorage.getItem("correoElectronico");
  if (emailGuardado) {
      document.getElementById("mostrarEmail").textContent = "Correo guardado: " + emailGuardado;
  }
}
window.mostrarEmailGuardado = mostrarEmailGuardado;

function eliminarEmail() {
  localStorage.removeItem("correoElectronico");
  document.getElementById("mostrarEmail").textContent = "";
}
window.eliminarEmail = eliminarEmail;

//Inicialización
window.onload = function() {
  mostrarEmailGuardado();  // Muestra el email guardado si existe
  inicializarListaEventos();  // Inicializa los eventos de la lista
};
