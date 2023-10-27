
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

    let tamano = document.getElementsByName("fsize");
    let seleccionado = false;
    for(let i=0; i<tamano.length; i++) {
        if(tamano[i].checked) {
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

    let ingredientes = ['jamon', 'bacon', 'champi', 'pina'];
    let marcado = false;
    for(let i=0; i<ingredientes.length; i++) {
        if(document.getElementById(ingredientes[i]).checked) {
            total += 1;
            marcado = true;
        }
    }

    if (!marcado) {
        alert('Selecciona uno de los ingredientes');
        return false;
    }
    var totalP = document.createElement("h3");
    totalP.innerText = "Precio total = " + total + " €";
    contenedorFinal.appendChild(totalP);
   

    return true;
}

