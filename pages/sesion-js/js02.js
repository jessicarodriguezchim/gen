console.log("Sesion JS02 uso de funciones");

/*

-------------Funciones declaradas--------------------------------
   (function declaration, function statement)
   una caracteristica de las funciones declaradas es que tiene hoisting.
  sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.
   -hoisting: comportamiento en JS que permite a las declaracion de variables (var)
   o funciones se eleven al cominzo de su ambito antes de que se ejecute el codigo.

*/
console.log(multiplica(4,3));

function multiplica(a,b){
    return a*b;
}

/*-----------funciones expresadas---------------
            (function expression)
   son funciones declaradas dentro de la asignascion de una variable.
   Estas funciones pueden ser anonimas (no tienen nombre).
   Las funciones expresadas no tienen hosting, porque no se 
   carga en memoria hasta que se utilice.

   sintaxis:
   const nombre de la variable = function nombreFuncion(parametros) {
    instruccuines;
   };

*/
const sum= function sumatoria(a,b) {
    return a+b;
}

console.log(multiplica(4,3));

let saludo; //undefined
const localidad="Tlaxcala";

if ( localidad == "buenos aires"){
    saludo = function ( name ) { return `Holis ${name}`};
}
else {
    saludo = function ( name ) { return `Buenos días ${name} `};
}

console.log(saludo(`Sergio`));
console.log(saludo(`David`));

/* -------------Funciones Autoinvocadas-------------
                  (selft-invoking functions)
Funciones que se autoinvocan, se pueden defiir con funciones anonimas.

   sintaxis:
   (function(parametros){}(argumentos));

*/
(function(name){
    console.log(`Me llamo ${name} y me autoinvoco`);
})("chatgpt");

/*
--------------------------fUNCIONES FLECHA------------------------
                        (arrow function)
funciones similares a las funciones expresadas pero:
-No requiere la palabra reservada fuction
-Si tiene una sola instruccion no requiere las llaves{}
-Si la instriccion es el mismo retorno, no requiere la palabra return.

   sintaxis:
   const nombre de la variable = (parametros) => {
    instruccuines;
   };
   */

  /*  const areaRectangulo = function (base, altura){
    return base* altura;
   } */

   const areaRectangulo =(base, altura) => base * altura;

   console.log(`El area es: ${areaRectangulo(3,9)}m2.`);

   /*
--------------------------Parametros por defecto------------------------
                        (default parameters)
Inicializa un parametro de la funcion, si no se envia el argumento cuando se invoca

   */

/**
 * 
 * @param {number} base del triangulo 
 * @param {number} altura del triangulo
 * @returns {number} base* altura /2
 */

const areaTriangulo = (base, altura) => base * altura /2.0;

console.log(`El area es: ${ areaTriangulo(4, 12)} m2.`);
console.log(`El area es: ${ areaTriangulo()} m2.`);//0.5
console.log(`El area es: ${ areaTriangulo(10)} m2.`)//5
console.log((1000).toString());//conversion base 10 -> 1000
console.log((1000).toString(2));//conversion base 10 -> 1111101000
console.log((1000).toString(16));//conversion base 10 -> 3e8

/* ----------------rest parameters ----------------
          (rest parameters)
Permite representar una serie de valores indefinidos en los argumentos
Esta serie de valores se presentan como un array.
Rest parameters debe estar al final de la lista de parametros.

   sintaxis:
   ...nombreParametro
   */
//sumar los valores del arreglo "rest"
const sumatoriaMultiplesNumeros = (a = 0, b = 0, ...rest) => {
    let suma = a + b;
    for (let i = 0; i < rest.length; i++){
        suma = suma + rest[i];
      }
    return suma;
}

console.log(`Sumatoria de múltiples números: ${ sumatoriaMultiplesNumeros(2,5)}`); // 7
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2, 5, 10, 9 )}`); // 26
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2, 5, 10, 9, 20, 10 )}`); // 56
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2)}`); // 2 

/*------------- Funciones de Callback-------------------
Es una funcion (definida, expresada, arrow, anonima) que se pasa a otra funcion como argumento, 
se pasa en el argumento como referencia (sin parentesis).
*/

function saludoALosPokemones(){
    return "Yo te elijo";
}

function saludoSquirtle(){
    return "vamo` a calmano";
}

function eligiendopokebola( saludo ){
    console.log("==============================");
    console.log("Hola estas en la liga pokemon");
    console.log("Elige a tu mejor pokemon");
    console.log(saludo());
}

eligiendopokebola(saludoALosPokemones);//"yo te elijo"
eligiendopokebola(saludoSquirtle);//"vamo` a calmano"
eligiendopokebola( function() {return "pika pika chuu" } );//Generar aqui mismo la funcion
//eligiendopokebola( function(nombre) {return "quiiii soy" + nombre }, "Cubone" ); //Generar aqui mismo la funcion en una sola linea 
/* eligiendopokebola(nombre=> `quiiii soy ${ nombre}` , "Charizard" ); */

/* Ejercicio 4
Crear un programa que itere sobre dos arreglos;
si hay cursos en común, imprimirlos en la consola.
student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];
salida: "Cursos en común: Programming, Music"
*/ 

//--------------- Resolviendo con ciclos anidados ----------------------
const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];


function cursosEnComun( student1Courses,  student2Courses  ){
  const commonCourses = []; // guardar los cursos en comun

  for (let i = 0; i < student1Courses.length; i++) { // ["Math", "English", "Programming", "Biology", "Physics", "Music"];
      for (let j = 0; j < student2Courses.length; j++) { // ["Geography", "Spanish", "Programming", "Music"]
          console.log(` ${student1Courses[i]} === ${student2Courses[j]} : ${student1Courses[i] === student2Courses[j]}`)
          if ( student1Courses[i] === student2Courses[j] ){
              commonCourses.push(student1Courses[i]);
          }    
      }        
  }

  return `Cursos en común ${commonCourses}`
}
console.log ( cursosEnComun( student1Courses, student2Courses ) );
console.log ( cursosEnComun( student1Courses, student2Courses ) );	console.log ( cursosEnComun( student1Courses, student2Courses ) );

//--------------- Resolviendo con filter e include ----------------------
console.log("######################################################");
function getCommonCoursesWithFilter( array1Courses, array2Courses ){
    return  array1Courses.filter( course=> array2Courses.includes(course) );
}

console.log(`Común: ${getCommonCoursesWithFilter( student1Courses, student2Courses )}`)

// -------------- Contar la cantidad de caracteres de una frase ---------------------
/*
   "peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma";

   Mostrar la cantidad de letras 'p'.

   recomendaciones de metodo: split.

*/
const phasePP = "peso pluma pica papas con un pico y una pala con un pico pica papas Peso Pluma";
const counterCharacter = ( phase, character ) => phase.split(character).length-1;

console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") } `); // 11 solo toma en cuenta las p minusculas
console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") + counterCharacter(phasePP, "P") } `); // 13 cuenta todas las p's.
const counterCharacterUnsensitive = ( phase, character ) => phase.toLowerCase().split(character).length-1; //13

// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncion( nuevoParametro );
        }
    }
*/

//....calculo del factorial de un numero usando ciclo for....

function factorialConCicloFor(number){
    let factorial = 1; //variable que se va a multiplicar.

    for (let i = 1; i <= number; i++){
        console.log(`factorial: ${factorial} * ${factorial*i}`);
        factorial = factorial * i;
    }
    return factorial;
}

console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`);

//......... Cálculo del factorial de un número usando recursividad ...............

function factorialConRecursividad( numero ){
    if ( numero === 1 ) {
        return 1;
    } else {
        console.log(`${numero} * ${numero-1}`);
        return numero * factorialConRecursividad( numero -1 );
    }
}

console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`);

//-----Saludar con recursividad----------------
/*
Generar una funcion recursiva que muestre en consola un saludo
donde se indique el numero de saludo deseado del 1 al 10.

ej: saludar 10 veces.
 Saludo 1
  Saludo 2
  Saludo 3
   ....
  Saludo 9
  Saludo 10

*/
//10 al 1
function saludoz( numeroSaludo){
    if( numeroSaludo === 1){
        return `Saludo ${numeroSaludo}`;
    }
    else {
        // llamada recursiva
        console.log(`Saludo ${numeroSaludo}`)
        return saludoz( numeroSaludo - 1 );
    }
}
console.log(saludoz(10));

//1 al 10
function saludoz1(number, current = 1) {
    if (current === number) {
      return `saludos ${number}`;
    }
    console.log(`saludos ${ current}`);
    return  saludoz1(number, current + 1);
}
console.log(saludoz1(10));





