window.onload = function(){
    
    function calcular_precio(){




    }   

    function validarFormulario(){
        let ok = true
        if(fname.value.trim()==""|| fdir.value.trim()==""||ftel.value.trim()==""||femail.value.trim()==""){
            
            ok = false
            alert("Error. Debe completar los campos de texto")
        }
        return ok
    }

    btnSubmit.onclick = function(e){
        if(!validarFormulario()){
            e.preventDefault();
        }

    }
}
