import { filterData } from './data.js';
import dataPotter from './data/potter/potter.js';
//console.log(example, data);
//console.log(dataPotter);

//IMPRIMIR DATA
//constante que contiene información del atributo ID donde se va a imprimir en el html
const root = document.getElementById("root");
//for que recorrerá el largo de la data
for (let i = 0; i < dataPotter.length; i++) {
  //imprimir en html
  root.innerHTML += `<section class="tarjetas">`
   + `<img src="${dataPotter[i].image}" class="foto">` +
   `<p> <section id="name">${dataPotter[i].name}</p>`
}

//FILTRAR POR CASA
//constante para guardar ID llamado desde el DOM
const selectHouse = document.getElementById("select");
//llamando la constante para que cuando escuche el evento ejecute la función
selectHouse.addEventListener("change", () => {
  //variable que almacena el valor de la opción seleccionada por el usuario
  let selectUser = selectHouse.options[selectHouse.selectedIndex].value;
  //se llama a la constante que donde se imprime en el html y se declara vacia para que limpie la página
  root.innerHTML = "";
  //llamo a la funcion exportada desde main.js y guardo en una variable el llamado de la funcion, el resultado desde data js
  let filterUser = filterData(dataPotter, selectUser); //esta variable que guardo en arreglo debe pasar por cada casa
//console.log(filterUser)
for (let i = 0; i< filterUser.length; i++){
  root.innerHTML += `<section class="tarjetas">`
  + `<img src="${filterUser[i].image}" class="foto">` +
  `<p> <section id="name">${filterUser[i].name}</p>`
}
})
