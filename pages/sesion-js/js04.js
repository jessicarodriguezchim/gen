// Declaramos un arreglode 2 dimensiones (matriz).

// Arrays anidados

// [ []   , []   , []   ]




const personasEnCh30 = [ 

    [ "Luis", "Allan" , "Anneth"  , "Maryluz" ] ,  /*indice 0, ByteMe(404) */

    [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,  /* indice 1, PerryCode */

    [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]    /* indice 2, BugBusters */

];




console.log(`Integrantes de BugBusters: ${ personasEnCh30[2] }`); // Lu,Leo,Daniel,Gina

console.log(`Integrantes de BugBusters: ${ personasEnCh30[2].join(", ") }`); // Lu, Leo, Daniel, Gina

                                                     // Feliz Cumpleaños

console.log(`BugBusters integrante n. 1: ${ personasEnCh30[2][0] }`); // Lu




// En la historia Leo tiene exceso de amonestaciones.

// Hay que reemplazar el nombre de Leo en PerryCode por Bryan.




// personasEnCh30[1][3] = "Brayan";

personasEnCh30[1].splice(3, 1, "Brayan");

console.table( personasEnCh30 ); 

// ------------- Iterando todos los elementos

for (let equipo = 0; equipo < personasEnCh30.length /*filas*/; equipo++) {

    for (let persona = 0; persona <  personasEnCh30[ equipo ].length; persona++) {

        console.log( personasEnCh30[ equipo ][ persona ] );        

    }    

}

// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/
/* console.table( personasEnCh30 ); 

const myPet = "Kraken";
for (const character of myPet  ){
    console.log( character );
}

for (const equipo of personasEnCh30 ) {
    console.log( equipo ); // Arreglo de equipos
    for (const persona of equipo) {
        console.log( persona ); //  Persona de cada equipo
    }
}

const myPet = "Kraken";
for (const character of myPet  ){
    console.log( character );
} */
// Refactoriza lo anterior con forEach
//convirtio los elementos de mypet(kraken) en un arreglo letra por letra con .split 
//luego ya utilizo el .forEach.
/* myPet.split("").forEach( character => console.log( character )) */

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i}*${j}=${i*j}`);
    }
  }

  // ============== Ciclo While ======================
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.
 Sintaxis:
    while( condición) sentencia;
    while ( condición ){
        sentencias;
    }
*/

let counter = 1;

/* while (  confirm("¿Quieres continuar?")  ) {
    console.log(`Veces que has continuado: ${counter}` );
    counter ++;
} */

// ============== Ciclo Do-While ======================
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla. La evaluación se realiza después de ejecutar la sentencia.
 Por lo tanto, la sentencia se va a ejecutar por lo menos una vez.
 Sintaxis:
    do {
        sentencias;
    } while( condición );
*/

let valor = -2;
while ( valor < 5) {
    console.log(`Valor en While ${valor}`); // -2, -1, 0, 1...4
    valor ++;
}

valor = 4;
do {
    console.log(`Valor en do-while ${valor} `); // 4
    valor++;
} while ( valor < 5 );

/* condiciones y expresiones */

