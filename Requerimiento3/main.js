
/****Funcion para cargar mediante AJAX del JSON****/
function cargarDatosPizzeria(){
    var request = new XMLHttpRequest();
    request.onload = function() {
        if(this.readyState == 4){
            if(request.status == 200){
            var datos = JSON.parse(request.responseText);
            actualizarTamanos(datos.tamanos);
            actualizarIngredientes(datos.ingredientes);
            }
            else {
                console.error("Error al cargar los datos", request.statusText);
            }
        }
    };
    request.open("GET", "pizzas.json", true);
    request.send();

    //Funcion para cargar en el elige los tamaños de las pizzas.
    function actualizarTamanos(tamanos){

        var selectTamanos = document.getElementById("tamanos-pizza");
        selectTamanos.innerHTML = "";

        //bucle para añadir en el DOM los elementos necesarios
        tamanos.forEach(function(tamano) {

            var opcion = document.createElement("option");
            opcion.value = tamano.id;
            opcion.setAttribute("name","fsize");
            opcion.textContent = tamano.nombre + " (" + tamano.precio + "€)";//para ayudar a cliente mostramos precio
            selectTamanos.appendChild(opcion);

        });
    }

    //Funcion para cargar en el elige los tamaños de las pizzas.
    function actualizarIngredientes(ingrediente){
        var contenedorIngredientes = document.getElementById("contenedor-ingredientes");
        contenedorIngredientes.innerHTML = "";
    ingrediente.forEach(function(ingrediente){
        var etiqueta = document.createElement("label");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = ingrediente.precio;
        checkbox.name = "ingredientes[]";
        etiqueta.appendChild(checkbox);
        etiqueta.appendChild(document.createTextNode(ingrediente.ingrediente + " (" + ingrediente.precio + "€)"));//para ayudar a cliente mostramos precio
        contenedorIngredientes.appendChild(etiqueta);
        contenedorIngredientes.appendChild(document.createElement("br"));
    })
        


    }


}
document.addEventListener("DOMContentLoaded", cargarDatosPizzeria);


/*****VALIDACION DEL FORMULARIO****/
function procesarPedido(e){

    e.preventDefault();

if(validacion()){

    return false;
}
}

function validacion() {
    //Se guardan los datos en las variables
    let nombre = document.getElementById('fname');
    let direccion = document.getElementById('fdir');
    let telefono = document.getElementById('ftel');
    let email = document.getElementById('femail');
    let contenedorFinal = document.getElementById('contenedorFinal');

    var total = 0;

    //Código para validar Datos de contacto
    if (nombre.value.trim() == "") {
        alert('Rellena el nombre');
        return false;
    }

    if (direccion.value.trim() == "") {
        alert('Rellena la dirección');
        return false;
    }

    if (telefono.value.trim() == "") {
        alert('Rellena el teléfono');
        return false;
    }

    if (email.value.trim() == "") {
        alert('Rellena el email');
        return false;
    }

    //Código para validar un tamaño de pizza seleccionado
    let tamano = document.getElementsByName("fsize");
    let seleccionado = false;
    for(let i=0; i<tamano.length; i++) {
        if(tamano[i].selected) {
            switch(tamano[i].value){
                case "pequena":
                    total += 5;
                    break;
                case "mediana":
                    total +=10;
                    break;
                case "grande":
                    total += 15;
                    break;
            }
            seleccionado = true;
            break;
        }
    }

    if(!seleccionado) {
        alert('Selecciona un tamaño de pizza');
        return false;
    }

    //Para validar ingredientes seleccionados
    let ingredientes = document.getElementsByName("ingredientes[]");
    let marcado = false;
    for(let i=0; i<ingredientes.length; i++) {
        if(ingredientes[i].checked) {
            total+=parseFloat(ingredientes[i].value);
            marcado=true;
        }
    }
    if (!marcado) {
        alert('Selecciona uno de los ingredientes');
        return false;
    }

    //Texto para mostrar el precio de la pizza elegida
    var totalP = document.createElement("h3");
    totalP.innerText = "Precio total = " + total + " €";
    contenedorFinal.appendChild(totalP);
   
    return true;
}

