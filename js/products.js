//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var listProductos = [];

function showListProductos(lista){

    let articulos = "<br><br><br>";
    for (let i = 0; i < lista.length; i++) {
        /*let listaPro = lista[i];*/

        articulos += `
        
            <table>
                <thead>
                    <tr>
                        <th> <img width="150x" src= "`+ lista[i].imgSrc+ `">  </th>
                        <td> <strong id="center">`+ lista[i].name +`</strong>  <br>
                         `+ lista[i].description +` <br>
                         Precio: ` + lista[i].currency + ' ' + lista[i].cost + `
                        </td>
                    </tr>
  
                </thead>
        
             </table>
             <br>
        
        `


        /*

        articulos += '<img width="150x" src= "'+ lista[i].imgSrc+ '">';
        articulos += '<p>Nombre: ' + lista[i].name + '</p>';
        articulos += '<p>' + lista[i].description + '</p>';
        articulos += '<p>Precio: ' + lista[i].currency + ' ' + lista[i].cost + '</p>';
        articulos += '<br><br><br>';

        */
        
    }
    document.getElementById("product").innerHTML = articulos;

}






document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function(resultado) {
        if (resultado.status === "ok") {
            listProductos = resultado.data;

            showListProductos(listProductos);
        }
    });

});