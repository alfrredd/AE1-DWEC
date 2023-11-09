function cargarDatosPizzeria(){
    var request = new XMLHttpRequest();
    request.open("GET", "pizzas.json", true);
    request.onload = function() {
        if(request.status == 200){
        var datos = JSON.parse(request.responseText);
        actualizarTamanos(datos.tamanos);
        actualizarIngredientes(datos.ingredientes);
        }
        else {
            console.error("Error al cargar los datos", request.statusText);
        }
    };
    request.send();

    function actualizarTamanos(tamanos){

        var selectTamanos = document.getElementById("tamanos-pizza");
        selectTamanos.innerHTML = "";
        tamanos.forEach(function(tamano) {

            var opcion = document.createElement("option");
            opcion.value = tamano.id;
            opcion.textContent = tamano.nombre + "( " + tamano.precio + "€)";
            selectTamanos.appendChild(opcion);

        });
    }

    function actualizarIngredientes(ingrediente){
        var contenedorIngredientes = document.getElementById("contenedor-ingredientes");
        contenedorIngredientes.innerHTML = "";
    ingrediente.forEach(function(ingrediente){
        var etiqueta = document.createElement("label");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = ingrediente.id;
        checkbox.name = "ingredientes[]";
        etiqueta.appendChild(checkbox);
        etiqueta.appendChild(document.createTextNode(ingrediente.ingrediente + "(" + ingrediente.precio + "€)"));
        contenedorIngredientes.appendChild(etiqueta);
        contenedorIngredientes.appendChild(document.createElement("br"));
    })
        


    }


}
document.addEventListener("DOMContentLoaded", cargarDatosPizzeria);