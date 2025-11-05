// CARROUSEL ----------------------------------------------------------
if(document.title === "Presentación de Portafolio") {
    //constructor de items para el carrousel
    function item(url, nombre, descripcion) {
        this.url = url;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    //Array del carrousel
    let imagenes = new Array();

    //Array del punto Seleccionado
    let puntoPosicion = new Array();

    //Se rellena con los items que deseemos
    imagenes.push(new item(
        "../Imagenes/Proyecto_Ian_1/Portafolio_1.png",
        "Portafolio de Ian Programacion",
        " ... "));

    imagenes.push(new item(
        "../Imagenes/Proyecto_Nerina_1/Portafolio_1.png",
        "Portafolio de Nerina Programacion",
        " ... "));

    imagenes.push(new item(
        "../Imagenes/Proyecto_Nerina_1/Fidelidad Alta.png",
        "Boceto de los trabajos realizados",
        " ... "));

    imagenes.push(new item(
        "../Imagenes/Proyecto_Ian_1/cod_1.png",
        "Código de trabajo",
        " ... "));

    let izquierda = document.getElementById('izquierda');
    let derecha = document.getElementById('derecha');
    let imagen = document.getElementById('imagenes');
    let puntos = document.getElementById('punto');
    let todosLosPuntos = document.querySelectorAll('[class*=puntoC-]');
    let posicion = 0;

    //Completar textos con la funcion letra por letra
    let eslogan = document.getElementById("eslogan");

    letraPorLetra("Innovamos con código, aprendimos creando.", 50, eslogan);


    posicionCarrousel();

    function cambiarImagen(posicion) {

        imagen.innerHTML = `<img src="${imagenes[posicion].url}" alt="item" class="item" loading="lazy">`;

    }



    izquierda.addEventListener('click', function() {

        posicion--;

        if(posicion == -1) {
            posicion = imagenes.length - 1;
        }

        cambiarImagen(posicion);

        posicionCarrousel();

    });

    derecha.addEventListener('click', function() {

        posicion++;

        if(posicion == imagenes.length) {
            posicion = 0;
        }

        cambiarImagen(posicion);

        posicionCarrousel();

    });

    function posicionCarrousel() {

        puntos.innerHTML = "";

        for (let i = 0 ; i  < imagenes.length ; i++) {
            
            if (i == posicion) {
                puntos.innerHTML += `<p class="puntoSeleccionado puntoC-${i}">.</p>`
                
            }
            else {

                puntos.innerHTML += `<p class="puntoC-${i}">.</p>`         
            }
            
        }

        todosLosPuntos = document.querySelectorAll('[class*=puntoC-]');

        todosLosPuntos.forEach(function (puntoASeleccionar) {        
            puntoASeleccionar.addEventListener('click', function() {
                puntoSeleccionado(puntoASeleccionar.className)
        });

    });

    }

    function puntoSeleccionado(evento) {

        const textoClase = evento.match(/puntoC-[0-9]/);

        const separacion = textoClase[0].split("-");

        posicion = Number.parseInt(separacion[1]);

        cambiarImagen(posicion);

        posicionCarrousel();

    }

}





//FIN CARROUSEL -----------------------------------------------------------


//---------------------------- FORMULARIO ----------------------------------------

if (document.title === "Contacto") {



    const formulario = document.getElementById("formulario");

    formulario.addEventListener("reset" , function(evento) {

        const div = document.querySelector('.cuadroDatos');

        if (div) {
            div.remove();
        }
        
    });

    formulario.addEventListener("submit" , function(evento) {

        const nombreCompleto = document.getElementById("nombreApellido");
        const email = document.getElementById("mail");
        const telefono = document.getElementById("telefono");
        const mensaje = document.getElementById("mensaje");

        const nombreCompletoError = document.getElementById("errorNombre");
        const emailError = document.getElementById("errorEmail");
        const telefonoError = document.getElementById("errorTelefono");
        const mensajeError = document.getElementById("errorMensaje");

        const nombreER = /^.{10,50}$/; 
        const emailER = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        const telefonoER = /^[0-9]{6,13}$/;
        const mensajeER = /^[\s\S]{10,512}$/;

        let valido = true;

        if (!nombreER.test(nombreCompleto.value)) {
            valido = false;
            letraPorLetra("Se permite entre 10 a 50 caracteres", 20, nombreCompletoError);
        } else {
            nombreCompletoError.innerHTML = "";
        }

        if (!emailER.test(email.value)) {
            valido = false;
            letraPorLetra("No es correcto el formato de correo", 20, emailError);
        } else {
            emailError.innerHTML = "";
        }

        if (!telefonoER.test(telefono.value)) {
            valido = false;
            letraPorLetra("formato solo numerico", 20, telefonoError);
        } else {
            telefonoError.innerHTML = "";
        }

        if (!mensajeER.test(mensaje.value)) {
            valido = false;
            letraPorLetra("Se permite colocar entre 10 a 512 caracteres", 20, mensajeError);
        } else {
            mensajeError.innerHTML = "";
        }

        if (!valido) {
            evento.preventDefault();
            return null;
        } else {
            evento.preventDefault();
            const informacion = {
                nombreCompleto: nombreCompleto.value,
                email: email.value,
                telefono: telefono.value,
                mensaje: mensaje.value
            }; 

            console.log(informacion);

            crearCuadroDatos(informacion);


        }

    });

    function crearCuadroDatos(datos) {

        const div = document.querySelector('.cuadroDatos');

        if (div) {
            div.remove();
        }

        const datosIngresados = document.createElement("div");
        datosIngresados.className = "cuadroDatos";
        datosIngresados.innerHTML = 
        `
        <p><b>DATOS ENVIADOS</b></p>
        <p><b>Nombre y Apellido:</b> ${datos.nombreCompleto}</p>
        <p><b>Email:</b> ${datos.email}</p>
        <p><b>Teléfono:</b> ${datos.telefono}</p>
        <p><b>Mensaje:</b> ${datos.mensaje}</p>
        `;
        document.getElementById("seccionFormulario").appendChild(datosIngresados);
    }
    
}


    






//---------------------------- FIN FORMULARIO ----------------------------------------

//---------------------------- PAGINA PROYECTOS --------------------------------------

if (document.title === "Proyectos") {
    let presentacion = document.getElementById("presentacion-proyectos");
    letraPorLetra("Quienes somos detrás del código...", 40, presentacion);
}



//---------------------------- FIN PAGINA PROYECTOS ----------------------------------

//---------------------------- UTILITARIOS (USO GENERAL) -----------------------------

//Funcion que toma un texto y reescribe letra por letra, según cantidad de milisegundos determinado
function letraPorLetra(texto, tiempo, objeto) {

    if (objeto.setInterval) {
        clearInterval(objeto.setInterval);
        objeto.setInterval = null;
    }

    if (objeto.innerHTML === texto) {
        return;
    }

    let contador = 0;

    let repetir = setInterval(completarTexto, tiempo);

    function completarTexto() {
        objeto.innerHTML += texto[contador];
        contador++;
        if(contador === texto.length) {
            clearInterval(repetir);
            repetir = null;
        }
    }
}





//---------------------------- FIN UTILITARIOS  -----------------------------