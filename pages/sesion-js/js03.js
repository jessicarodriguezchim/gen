console.log("sesion Js 03 control de flujo");

//--------------- Declaración de bloque de código ----------------
/*
 Sintaxis:
         {

          }
 Las variables declaradas con let y const
 solo tendrán alcance(scope) dentro del bloque
 o bloques anidados.

 Si la variable en el bloque, tiene el mismo nombre
 que una variable fuera del bloque, se le da prioridad
 a la varible dentro del bloque.
*/
// let y const no se pueden redeclarar
// let firstname = "Lalo";
// const lastname = "García";
var age = "24";

let firstname = "Sergio";
const lastname = "Torres";
var age = "39";

{
    let firstname = "Mau";
    const lastname = "Peniche";
    var age = "26";
    const colorFavorito = "azul";
    var comidaFavorita = "pozole";

    console.log(`${firstname} ${lastname}`); // mau peniche
    console.log(age); // 26
    console.log(colorFavorito); // azul
    console.log(comidaFavorita); // pozole
    {
        const colorFavorito = "morado";
        console.log(colorFavorito); // morado
        console.log(firstname); // mau
        {
            console.log(colorFavorito); // morado
            console.log(firstname); // mau
        }
    }
}

console.log(`${firstname} ${lastname}`); // sergio torres
console.log(age); // 26
//console.log( colorFavorito ); // colorFavorito no está definido
console.log(comidaFavorita); // pozole

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.
 Sintaxis:
    if ( condición ) sentencia;
    if ( condición ) {
        sentencias;
    }
    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;
    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }
    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;
    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   
*/

const temperatura = 29;
let mensaje = "Temperatura de ";

if (temperatura === 22) {
    mensaje += `${temperatura} grados centigrados es ideal =)`;
}
else if (temperatura >= 15 && temperatura <= 24) {
    mensaje += `${temperatura} grados centigrados es fria`;

}
//rango de 23 a 30 grados es caluroso.
else if (temperatura >= 23 && temperatura <= 30) {
    mensaje += `${temperatura} grados centigrados es calurosa`;
}

else {
    mensaje = `La temperatura de ${temperatura} grados centigrados no es ideal =(`;
}

console.log(mensaje);

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/
/**
 * Establece la velocidad de un ventilador
 * @param {number} velocidad del ventilador
 * @param {number} mensaje de la velocidad establecidad del ventilador
 */
/* const setVelocidadVentilador = (velocidad = 0) => {
    let mensaje;

    //la condicional switch utiliza la comparacion estricta (=== )
    switch (parseInt(velocidad)) {
        case 0:
            mensaje = "apagado";
            breack;
        case 1:
            mensaje = "velocidad baja";
            breack;
            breack;

        case 2:
        case "2":
            mensaje = "velocidad media"; break;
        default:
            mensaje = "el nivel no existe";
            breack;
    }
    return mensaje;
}
console.log(`La velocidad del ventilador esta ${setVelocidadVentilador(1)}`);
console.log(`La velocidad del ventilador esta ${setVelocidadVentilador(8)}`);
console.log(`La velocidad del ventilador esta ${setVelocidadVentilador("2")}`);
 */

// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12, 1, 2 = invierno.
 mes 3, 4, 5  = primavera
 mes 6, 7, 8  = verano
 mes 9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.
*/

function numeroDeMes(){
    const number = parseInt(prompt());
    
    switch(number){
        case 1:
        case 2: 
        case 12: alert("invierno");
        break;
        case 3:
        case 4:
        case 5: alert("primavera");
        break;
        case 6:
        case 7: 
        case 8: alert("verano");
        break;
        case 9:
        case 10:
        case 11: alert("otoño");
        break;
        default: alert("not a number");
        break;
    }
}
numeroDeMes();


function numeroDeMes2(){
    const number = parseInt(prompt());
    const invierno = number == 1 || number == 2 || number == 12;
    const primavera = number == 3 || number == 4 || number == 5;
    const verano = number == 6 || number == 7 || number == 8;
    const otoño = number == 9 || number == 10 || number == 11;
    if(invierno){
        alert("invierno");
    } else if(primavera){
        alert("primavera");
    } else if(verano){
        alert("verano");
    } else if(otoño){
        alert("otoño")
    }

}

numeroDeMes2();

//----operador ternario----
/*
Es el unico operador de Js que tiene 3 operados.
Generalmente se utilizan como opcion a la sentencia if-else.

sintaxis:
condicion ?expresionSiCondicionEsVerdadera : ExpresionSiCondicionEsFalsa;

*/
const pagoTarjetaCredito = false;
/* 
let msj;
if(pagoTarjetaCredito === true) msj ="A realizado el pago de su TC";
else msj = "No se ha realizado el pago"; */
const msj = pagoTarjetaCredito ? "A realizado el pago de TC" : "No ha realizado el pago de TC"

console.log(`El usuario ${msj}`);

// --------------- mini ejercicio  ----------------------------
/*
 Preguntar con prompt la edad del usuario: 20
 Si es >= 18 indicar en la consola "El usuario es mayor de edad";
 Si no cumple con la condición "El usuario no es mayor de edad".
*/

const userAge = parseInt (prompt("Escribe tu edad: ", 18));
const mayorEdad = userAge >= 18 ? "" : " no";
console.log(`El usuario${mayorEdad} es mayor de edad`);

//......... Cálculo del factorial de un número usando recursividad ...............

/* function factorialConRecursividad( numero ){
    if ( numero <= 0 ) {
        return 1;
    } else {
       
        return numero * factorialConRecursividad( numero -1 );
    }
} */


function factorialConRecursividad( numero ){
return factorial = numero < 1 ? 1 :  numero * factorialConRecursividad( numero -1 );

}
console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`);





