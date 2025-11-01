// CARROUSEL ----------------------------------------------------------

//constructor de items para el carrousel
function item(url, nombre, descripcion) {
    this.url = url;
    this.nombre = nombre;
    this.descripcion = descripcion;
}

//Constructor del punto para la posicion
function seleccionPunto(contador, texto) {
    this.contador = contador;
    this.texto = texto;
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

let izquierda = document.getElementById('izquierda');
let derecha = document.getElementById('derecha');
let imagen = document.getElementById('imagenes');
let puntos = document.getElementById('punto');
//let texto = document.getElementById();
let posicion = 0;

posicionCarrousel();


izquierda.addEventListener('click', function() {

    posicion--;

    if(posicion == -1) {
        posicion = imagenes.length - 1;
    }

    imagen.innerHTML = `<img src="${imagenes[posicion].url}" alt="item" class="item" loading="lazy">`;

    posicionCarrousel();

});

derecha.addEventListener('click', function() {

    posicion++;

    if(posicion == imagenes.length) {
        posicion = 0;
    }

    imagen.innerHTML = `<img src="${imagenes[posicion].url}" alt="item" class="item" loading="lazy">`;

    posicionCarrousel();

});

function posicionCarrousel() {

    puntos.innerHTML = "";
    let contador = 0;

    for (let i = 0 ; i  < imagenes.length ; i++) {
        


        if (i == posicion) {
            puntoPosicion.push(
                new seleccionPunto(
                    contador,
                    puntos.innerHTML += `<p class="puntoSeleccionado">.</p>`
                )
            );
            
        }
        else {
            puntoPosicion.push(
                new seleccionPunto(
                    contador,
                    puntos.innerHTML += `<p>.</p>`
                )
            );            
        }

        contador++;
        
    }

}




//FIN CARROUSEL -----------------------------------------------------------