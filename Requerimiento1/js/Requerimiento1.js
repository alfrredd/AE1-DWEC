        //Función que devuelve un array con las características de las teleoperadoras 
        function listarCompanias(){
            let compania_movil = [
                { nombre : 'Movistar',
                  color : 'Azul'},
                { nombre : 'Vodafone',
                color : 'Rojo'},
                { nombre : 'Orange',
                color : 'Naranja'},
                { nombre : 'Yoigo',
                color : 'Morado'}, 
        ]
            return compania_movil;    
        }

        function listarDispositivos(){
            let dispositivos_tecnologicos = [
                { nombre : 'Ordenador',
                tamaño : 'Grande'},
                { nombre : 'Portátil',
                tamaño : 'Medio'},
                { nombre : 'Tablet',
                tamaño : 'Medio'},
                { nombre : 'Smartphone',
                tamaño : 'Pequeño'}, 
                { nombre : 'Smartwatch',
                tamaño : 'Pequeño'}, 
        ]
            return dispositivos_tecnologicos;    
        }

        //Función para pintar el HTML desde JS
        function generarFormularioDOM(){

            //Ponemos un titulillo a la página
            let titulo = document.createElement("h1")
            let text_titulo = document.createTextNode("FORMULARIO DE ALTA")
            titulo.appendChild(text_titulo)
            div1.appendChild(titulo)

            //creamos el formulario
            let form = document.createElement("form");//<form></form>

            /*-----------------CAMPOS DE TEXTO-----------------------*/

            //Título para los campos de texto
            let text = document.createElement("h3")
            let text_text = document.createTextNode("Textfields")
            text.appendChild(text_text)
            form.appendChild(text)
        
            //campo de texto para el dni
            let label_dni = document.createElement("label")//<label></label>
            let field_dni = document.createElement("input")//<input></input>
            field_dni.setAttribute("type","text")//<input type="text"></input>
            field_dni.setAttribute("id","fdni")//<input type="text" id="fdni"></input>
            label_dni.setAttribute("for","fdni")//<label for="fdni"></label>
            let text_label_dni = document.createTextNode("DNI: ")//DNI: 
            label_dni.appendChild(text_label_dni)//<label for="fdni">DNI:</label>
            form.appendChild(label_dni)//<form><label for="fdni">DNI:</label></form>
            form.appendChild(field_dni)//<form><label for="fdni">DNI:</label><input type="text" id="fdni"></input></form>
            let salto_linea = document.createElement("br")
            form.appendChild(salto_linea)

            //campo de texto para el nombre
            let label_nombre = document.createElement("label")
            let field_nombre = document.createElement("input")
            field_nombre.setAttribute("type","text")
            field_nombre.setAttribute("id","fnombre")
            label_nombre.setAttribute("for","fnombre")
            let text_label_nombre = document.createTextNode("Nombre: ")
            label_nombre.appendChild(text_label_nombre)
            form.appendChild(label_nombre)
            form.appendChild(field_nombre)
            salto_linea = document.createElement("br")
            form.appendChild(salto_linea)

            //campo de texto para los apellidos
            let label_apellidos = document.createElement("label")
            let field_apellidos = document.createElement("input")
            field_apellidos.setAttribute("type","text")
            field_apellidos.setAttribute("id","fapellidos")
            label_apellidos.setAttribute("for","fapellidos")
            let text_label_apellidos = document.createTextNode("Apellidos: ")
            label_apellidos.appendChild(text_label_apellidos)
            form.appendChild(label_apellidos)
            form.appendChild(field_apellidos)
            salto_linea = document.createElement("br")
            form.appendChild(salto_linea)        

            //campo de texto para la dirección
            let label_direccion = document.createElement("label")
            let field_direccion = document.createElement("input")
            field_direccion.setAttribute("type","text")
            field_direccion.setAttribute("id","fdireccion")
            label_direccion.setAttribute("for","fdireccion")
            let text_label_direccion = document.createTextNode("Dirección: ")
            label_direccion.appendChild(text_label_direccion)
            form.appendChild(label_direccion)
            form.appendChild(field_direccion)
            salto_linea = document.createElement("br")
            form.appendChild(salto_linea)
            
            //campo de teléfono para el teléfono
            let label_tel = document.createElement("label")
            let field_tel = document.createElement("input")
            field_tel.setAttribute("type","tel")
            field_tel.setAttribute("id","ftel")
            label_tel.setAttribute("for","ftel")
            let text_label_tel = document.createTextNode("Teléfono: ")
            label_tel.appendChild(text_label_tel)
            form.appendChild(label_tel)
            form.appendChild(field_tel)
            salto_linea = document.createElement("br")
            form.appendChild(salto_linea)

            /*-----------------RADIO BUTTONS-----------------------*/


            //RADIO BUTTONS, ponemos título
            let radius = document.createElement("h3")
            let text_radius = document.createTextNode("Radius buttons")
            radius.appendChild(text_radius)
            form.appendChild(radius)

            //Título para la primera elección
            let radius1 = document.createElement("h4")
            let text_radius1 = document.createTextNode("Elige tu compañía telefónica")
            radius1.appendChild(text_radius1)
            form.appendChild(radius1)

            //invocamos a la función
            let compania_movil=listarCompanias()

            for(let compania of compania_movil){

                let label = document.createElement("label")//<label></label>
                let field = document.createElement("input")//<input></input>
                field.setAttribute("type","radio")//<input type="radio"></input>
                field.setAttribute("name","tel_company")//<input type="radio" name="tel_company"></input>
                field.setAttribute("id",compania.nombre)//<input type="radio" name="tel_company" id=compania.nombre></input>
                field.setAttribute("value",compania.nombre)
                //<input type="radio" name="tel_company" value="compania.nombre" id="compania.nombre"></input>
                label.setAttribute("for",compania.nombre)//<label for="compania.nombre"></label>
                let label_text = document.createTextNode(compania.nombre)//compania.nombre
                label.appendChild(label_text)//<label for="compania.nombre">compania.nombre</label>
                form.appendChild(field)
                form.appendChild(label)

                salto_linea = document.createElement("br")
                form.appendChild(salto_linea)

            }

            //segundo radio button: color favorito
            let radius2 = document.createElement("h4")
            let text_radius2 = document.createTextNode("Elige tu color favorito")
            radius2.appendChild(text_radius2)
            form.appendChild(radius2)

            for(let compania of compania_movil){

                let label = document.createElement("label")
                let field = document.createElement("input")
                field.setAttribute("type","radio")
                field.setAttribute("name","color_fav")
                field.setAttribute("id",compania.color)
                field.setAttribute("value",compania.color)
                label.setAttribute("for",compania.color)
                let label_text = document.createTextNode(compania.color)
                label.appendChild(label_text)
                form.appendChild(field)
                form.appendChild(label)

                salto_linea = document.createElement("br")
                form.appendChild(salto_linea)

            }

            /*-----------------CHECKBOX-----------------------*/

            //CHECKBOX, ponemos título
            let checkbox = document.createElement("h3")
            let text_checkbox = document.createTextNode("Checkbox buttons")
            checkbox.appendChild(text_checkbox)
            form.appendChild(checkbox)

            //Título para la pregunta
            let checkbox1 = document.createElement("h4")
            let text_checkbox1 = document.createTextNode("Selecciona los dispositivos que posees")
            checkbox1.appendChild(text_checkbox1)
            form.appendChild(checkbox1)

            //invocamos a la función
            let dispositivos_tecnologicos=listarDispositivos()

            for(let dispositivo of dispositivos_tecnologicos){

                let label = document.createElement("label")
                let field = document.createElement("input")
                field.setAttribute("type","checkbox")
                field.setAttribute("name",dispositivo.nombre)
                field.setAttribute("id",dispositivo.nombre)
                field.setAttribute("value",dispositivo.nombre)
                label.setAttribute("for",dispositivo.nombre)
                let label_text = document.createTextNode(dispositivo.nombre)
                label.appendChild(label_text)
                form.appendChild(field)
                form.appendChild(label)

                salto_linea = document.createElement("br")
                form.appendChild(salto_linea)

            }

            /*-----------------IMÁGENES-----------------------*/

            //IMAGENES, ponemos título
            let imagenes = document.createElement("h3")
            let text_imagenes = document.createTextNode("Imagenes en formulario")
            imagenes.appendChild(text_imagenes)
            form.appendChild(imagenes)

            //Título para la pregunta
            let foto1 = document.createElement("h4")
            let text_foto1 = document.createTextNode("Selecciona tu guerrero tecnológico favorito")
            foto1.appendChild(text_foto1)
            form.appendChild(foto1)

            //imagen 1
            let imagen1 = document.createElement("input")
            imagen1.setAttribute("type","image")
            imagen1.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg")
            imagen1.setAttribute("alt","Elon Musk portrait")
            imagen1.setAttribute("width","64")
            imagen1.setAttribute("height","64")
            form.appendChild(imagen1)
            salto_linea = document.createElement("br")
            form.appendChild(salto_linea)

            //imagen 2
            let imagen2 = document.createElement("input")
            imagen2.setAttribute("type","image")
            imagen2.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UMItODpwUjPhQdp1pTVQQnp_bMeLIr_Lfg&usqp=CAU")
            imagen2.setAttribute("alt","Mark Zuckerberg portrait")
            imagen2.setAttribute("width","64")
            imagen2.setAttribute("height","64")
            form.appendChild(imagen2)

            /*-----------------SELECT-----------------------*/

            //SELECT, ponemos título
            let select = document.createElement("h3")
            let text_select = document.createTextNode("Tipo Select")
            select.appendChild(text_select)
            form.appendChild(select)

            //Título para la pregunta
            let select1 = document.createElement("h4")
            let text_select1 = document.createTextNode("¿Qué te va pareciendo hasta ahora la tarea, Félix?")
            select1.appendChild(text_select1)
            form.appendChild(select1)

            let selector = document.createElement("select")
            let opc1 = document.createElement("option")
            let opc2 = document.createElement("option")
            let opc3 = document.createElement("option")
            opc1.setAttribute("value","Fantástica")
            opc2.setAttribute("value","Maravillosa")
            opc3.setAttribute("value","Espléndida")
            let txt1 = document.createTextNode("Fantástica")
            let txt2 = document.createTextNode("Maravillosa")
            let txt3 = document.createTextNode("Espléndida")
            opc1.appendChild(txt1)
            opc2.appendChild(txt2)
            opc3.appendChild(txt3)
            selector.appendChild(opc1)
            selector.appendChild(opc2)
            selector.appendChild(opc3)
            form.appendChild(selector)

        /*-----------------TEXTAREA-----------------------*/
            //TEXTAREA, ponemos título
            let textarea_title = document.createElement("h3")
            let text_textarea_title = document.createTextNode("Textarea")
            textarea_title.appendChild(text_textarea_title)
            form.appendChild(textarea_title)

            let textarea = document.createElement("textarea")
            textarea.setAttribute("name","textarea")
            textarea.setAttribute("rows","10")
            textarea.setAttribute("cols","50")

            let txt_textarea = document.createTextNode("Escribe lo que quieras por aquí")
            textarea.appendChild(txt_textarea)
            form.appendChild(textarea)

            div1.appendChild(form)


        }
        