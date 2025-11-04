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
    //let texto = document.getElementById();
    let posicion = 0;


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
                puntos.innerHTML += `<p class="puntoSeleccionado">.</p>`
                
            }
            else {

                puntos.innerHTML += `<p>.</p>`         
            }
            
        }

    }
}





//FIN CARROUSEL -----------------------------------------------------------


//---------------------------- FORMULARIO ----------------------------------------

if (document.title === "Contacto") {
    
}


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
        nombreCompletoError.innerHTML = "Se permite entre 10 a 50 caracteres";
    } else {
        nombreCompletoError.innerHTML = "";
    }

    if (!emailER.test(email.value)) {
        valido = false;
        emailError.innerHTML = "No es correcto el formato de correo";
    } else {
        emailError.innerHTML = "";
    }

    if (!telefonoER.test(telefono.value)) {
        valido = false;
        telefonoError.innerHTML = "formato solo numerico";
    } else {
        telefonoError.innerHTML = "";
    }

    if (!mensajeER.test(mensaje.value)) {
        valido = false;
        mensajeError.innerHTML = "Se puede colocar entre 10 a 512 caracteres";
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



    






//---------------------------- FIN FORMULARIO ----------------------------------------