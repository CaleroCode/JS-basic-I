//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí
console.log("Bienvendo/a al bootcamp P2 Juniors (BCN Singulars) de Factoria f5")


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí
let nombre = "Calero";
let edad = 41;
let esVerano = true;
let nulo = null;
let undefinedValor = undefined;
let estudianteBootcamp = {          
    nombre: "Calero",
    edad: 41
};
let direcciones = ["arriba", "abajo", "izquierda", "derecha"]

console.log("String:", nombre);
console.log("Number:", edad);
console.log("Boolean:", esVerano);
console.log("Null:", nulo);
console.log("Undefined:", undefinedValor);
console.log("Object:", estudianteBootcamp);
console.log("Array:", direcciones);






//OPERADORES ARITMÉTICOS
//Ejercicio 4: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let primernumero = 1;
let segundonumero = 2;
let suma = primernumero + segundonumero;
console.log("La suma súper difícil es:", suma);



//Ejercicio 5: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let primernumero = 10;
let segundonumero = 2;
let resta = primernumero - segundonumero;
console.log("La resta súper difícil es:", resta);



//Ejercicio 6: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let primernumero = 1;
let segundonumero = 2;
let multiplar = primernumero * segundonumero;
console.log("La multiplicación súper difícil es:", multiplar);



//Ejercicio 7: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let primernumero = 1;
let segundonumero = 2;
let dividir = primernumero * segundonumero;
console.log("La división súper difícil es:", dividir);



//OPERADORES DE COMPARACIÓN
// Ejercicio 8: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí
let primero = 1;
let segundo = 2;
let compara = primero === segundo;
console.log("¿Es igual el primer número y el segundo?", compara);



// Ejercicio 9: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí
let primero = 1;
let segundo = 2;
let compara = primero === segundo;
console.log("¿Es igual el primer número y el segundo?", compara);



//Ejercicio 10: completa el ejercicio
/*
let num1 = 15
let num2 = 20

let comparacion = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)
*/
let num1 = 15;
let num2 = 20;
let compara = primero === segundo;
console.log("¿Es igual el primer número y el segundo?", compara);


//Ejercicio 11: completa el ejercicio
/*
let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 
*/
let num3 = 1; 
let num3AsString = "1";
let result = num3 === num3AsString;
console.log(result)


//Ejercicio 12: completa el ejercicio
/*
let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)
*/
let num3 = 1;
let num3AsString = "1"
let compara = num3 === num3AsString;
console.log(result2)

//OPERADORES DE CADENAS
//Ejercicio 13: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
let nombre = "Iván";
let apellido = "Calero";
let nombreCompleto = nombre + " " + apellido;
console.log("Nombre completo:", nombreCompleto);





//OPERADORES DE LÓGICA
//Ejercicio 14: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

/* let a = 6;
let b = 3;

let res =  a < 10 __ b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 __ b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 __ b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 __ b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) */

let a = 6;
let b = 3;

let res =  a < 10 && b > 1 

let res2 = a < 10 && b < 1 

let res3 = a == 5 || b == 5

let res4 = a == 6 || b == 0

let res5 = a == 0 || b == 3

let res6 = a == 6 && b == 3