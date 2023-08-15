console.log("Sesion Js06: Manipulacion del DOM");
//Modifica un elemento HTML por medio de su ID//
const findElementById = () => {
 const title = document.getElementById("title");
console.log(title);
console.log(typeof title);//objct
console.log(title.innerHTML);//contenido dentro de la etiqueta de <h1> </h1> "sesion X".

title.innerHTML = ` <span id= "generation" class="text-primary"> Generation </span> - Sesión JS 06`; //modificacion para cambiar el titulo del html y aplicar color azul.


}

findElementById ();


///----------Encontrar elementos por su etiqueta (tag)-----------
const changeElementsByTagName = () =>{
    const unorderList = document.getElementsByTagName("li"); // Colección de elementos
    console.log( unorderList ); // HTML Collection

    for (const listItem of unorderList) {
        listItem.innerHTML = `<span class="text-success fs-4">  ${listItem.innerHTML} 🛸 </span>`
    }

}

changeElementsByTagName();

//------------- Uso de selector universal------
//querySelector trae todas las etiquetas que son semejantes.

const findElementByQuerySelector = () => {
    //const element = document.querySelector ("#title"); //Seleccionar por ID.
    //const selector = document.querySelector (".text-warning"); //seleccionar por clase.
    //const element = document.querySelector ("ul"); //Seleccionar por tag
    //const element = document.querySelector ("li"); //Seleccionar por tag
    const element = document.querySelector ("h1 span"); //Seleccionar por tag
    console.log("element");

}

findElementByQuerySelector();

//---Crear nuevo elemento HTML----
// appendChild

const newElement =  () => {
    const newElement = document.createElement("div"); // <div> </div>

    newElement.innerHTML = `La Ch30 le gusta:
    <ul> 
       <li>El Helado </li>
       <li> El chisme </li>
        <li> Los corridos tumbaos </li>
        <li> Escuchar a Mau</li>
         <li> Ser mejores amigos de Anneth </li>
    </ul>
    `;
const descriptionCh30 = document.querySelector("#descriptionCh30");// selector de Css "#".

descriptionCh30.appendChild( newElement );

}

newElement();

//----Cambiar el color de texto----
//style.color
//con parametros

const changeColor = (color) => {
    const descriptionCh301 = document.getElementById("descriptionCh30");
    descriptionCh301.style = color;
    descriptionCh301.style.border = `thin solid ${color}`;
}

changeColor ("beige") ;

//--------------------Propiedades de visualizacion-----
//                       Desaparece el elemento
//display : none (quitar el elemento del DOM)
//visibility : hidden (oculta el elemento)

const getReferenceTitleGeneration = () => {
    return document.getElementById("generation");
   }
   
   const displayNoneElement = () => {
    const generation = getReferenceTitleGeneration();
    generation.style.display = "none"; // quitar el elemento
   }
   
   const hiddenElement = () => {
       const generation = getReferenceTitleGeneration();
       generation.style.visibility = "hidden"  // ocultar el elemento
   }
   
   const resetElements = () => {
       const generation = getReferenceTitleGeneration();
       generation.style.visibility = "visible"; 
       generation.style.display = "inline"; 
   
   }