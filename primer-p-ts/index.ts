// Paso 2.: Crea un proyecto
console.log("Ejercicio 2: corriendo desde typescript")

// Paso 3: Creación de variables de diferentes tipos de datos (string, number, boolean, Date)
let nombrePaso3: string = "Ana";
let edadPaso3: number = 28;
let esEstudiantePaso3: boolean = true;
let fechaPaso3: Date = new Date();

document.getElementById("resultadoPaso3").innerHTML = `
  <strong>Paso 3 - Variables:</strong> <br>
  Nombre: ${nombrePaso3} <br>
  Edad: ${edadPaso3} <br>
  Es estudiante: ${esEstudiantePaso3} <br>
  Fecha actual: ${fechaPaso3.toDateString()}
`;

// Paso 4: Función que convierte un número a una cadena de texto
function convertirNumeroACadenaPaso4(numero: number): string {
    return numero.toString();
}

let numeroConvertidoPaso4: string = convertirNumeroACadenaPaso4(456);
document.getElementById("numeroPaso4").innerHTML = `
  <strong>Paso 4 - Convertir número a cadena:</strong> <br>
  Número convertido: ${numeroConvertidoPaso4}
`;

// Paso 5: Función que suma los elementos de un array
function sumarArrayPaso5(numeros: number[]): number {
    return numeros.reduce((a, b) => a + b, 0);
}

let arrayNumerosPaso5: number[] = [10, 20, 30, 40, 50];
let sumaPaso5: number = sumarArrayPaso5(arrayNumerosPaso5);
document.getElementById("sumaPaso5").innerHTML = `
  <strong>Paso 5 - Sumar array de números:</strong> <br>
  Suma de los números: ${sumaPaso5}
`;

// Paso 6: Objeto que representa un estudiante
let estudiantePaso6 = {
    nombre: "Ana",
    edad: 28,
    curso: "Programación Avanzada"
};

document.getElementById("estudiantePaso6").innerHTML = `
  <strong>Paso 6 - Estudiante:</strong> <br>
  Nombre: ${estudiantePaso6.nombre} <br>
  Edad: ${estudiantePaso6.edad} <br>
  Curso: ${estudiantePaso6.curso}
`;

// Paso 7: Definición de un type para representar una dirección
type DireccionPaso7 = {
    calle: string;
    ciudad: string;
    codigoPostal: number;
};

let direccionPaso7: DireccionPaso7 = {
    calle: "Av. Siempre Viva 123",
    ciudad: "Springfield",
    codigoPostal: 12345
};

document.getElementById("resultadoPaso7").innerHTML = `
  <strong>Paso 7 - Dirección:</strong> <br>
  Calle: ${direccionPaso7.calle} <br>
  Ciudad: ${direccionPaso7.ciudad} <br>
  Código Postal: ${direccionPaso7.codigoPostal}
`;

// Paso 8: Definición de una interfaz para un usuario con un método de saludo
interface UsuarioPaso8 {
    nombre: string;
    correo: string;
    saludar(): string;
}

let usuarioPaso8: UsuarioPaso8 = {
    nombre: "Ana",
    correo: "anita@gmail.com",
    saludar() {
        return `Hola, soy ${this.nombre}.`;
    }
};

document.getElementById("resultadoPaso8").innerHTML = `
  <strong>Paso 8 - Usuario:</strong> <br>
  Nombre: ${usuarioPaso8.nombre} <br>
  Correo: ${usuarioPaso8.correo} <br>
  Saludo: ${usuarioPaso8.saludar()}
`;

// Paso 9: Definición de la clase Persona con un método de presentación
class PersonaPaso9 {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

let personaPaso9 = new PersonaPaso9("Ana", 28);

document.getElementById("resultadoPaso9").innerHTML = `
  <strong>Paso 9 - Persona:</strong> <br>
  ${personaPaso9.presentarse()}
`;

// Paso 10: Definición de una clase genérica Caja que almacena un valor de cualquier tipo
class CajaPaso10<T> {
    valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    obtenerValor(): T {
        return this.valor;
    }
}

// Creando instancias de la clase genérica con diferentes tipos
let cajaStringPaso10 = new CajaPaso10<string>("Hola Mundo");
let cajaNumeroPaso10 = new CajaPaso10<number>(2024);

document.getElementById("resultadoPaso10").innerHTML = `
  <strong>Paso 10 - Caja genérica:</strong> <br>
  Valor de cajaString: ${cajaStringPaso10.obtenerValor()} <br>
  Valor de cajaNumero: ${cajaNumeroPaso10.obtenerValor()}
`;

// Paso 11: Definición de una función genérica identidad que devuelve el valor recibido
function identidadPaso11<T>(valor: T): T {
    return valor;
}

// Usando la función genérica con diferentes tipos
let identidadStringPaso11 = identidadPaso11<string>("Soy un string");
let identidadNumeroPaso11 = identidadPaso11<number>(123);

document.getElementById("resultadoPaso11").innerHTML = `
  <strong>Paso 11 - Función genérica identidad:</strong> <br>
  Identidad de string: ${identidadStringPaso11} <br>
  Identidad de número: ${identidadNumeroPaso11}
`;

// Paso 12: Definición de una enumeración para colores
enum ColorPaso12 {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

// Asignación del color favorito
let colorFavoritoPaso12: ColorPaso12 = ColorPaso12.Verde;

document.getElementById("resultadoPaso12").innerHTML = `
  <strong>Paso 12 - Enumeración Color:</strong> <br>
  Color favorito: ${colorFavoritoPaso12}
`;


