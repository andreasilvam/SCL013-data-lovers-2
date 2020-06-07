// estas funciones son de ejemplo
//`filterData(data, condition)`
//`sortData(data, sortBy, sortOrder)`

export const filterHouse = (data, condition) => {
  //console.log(data)
  //console.log(condition)
  //declaro variable tipo arreglo vacio, para que me guarde info
  let houses = []
  //recorro data
  for (let i=0; i < data.length; i++){
    if (data[i].house === condition) {
      //console.log(data[i].house)
      //push para pasarle info al array vacio
      houses.push(data[i]);
    }
  }
  //console.log(houses)
  return houses; //retorna arreglo con casas
}

//filtro los objetos de la data*/
/*const search = data.filter(function (data) {
  return data.house === condition;
});
return search;
}*/

