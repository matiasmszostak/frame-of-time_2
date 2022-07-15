/*

let arrImagenes = ["../img/geyser.jpg",
                   "../img/padre-hijo.jpg",
                   "../img/desierto-pare.jpg",
                   "../img/gato-norte.jpg",
                   "../img/metegol.jpg",
                   "../img/uyuni.jpg",
                   "../img/planta-peru.jpg",
                   "../img/ruinas-ventana.jpg",
                   "../img/selva-ruinas.jpg"];

let galeriaImagenes = document.querySelector("#galeria-imagenes");

for (const foto of arrImagenes){

    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<div><img src="${foto}" class="foto" alt="..."></div>`;

    galeriaImagenes.appendChild(contenedor);

}

*/

// Slider

// Selecciono todos los elementos con la clase slide. Va a formar un array de slides.
const slides = document.querySelectorAll('.slide');

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const navbar = document.querySelector('.navbar');

// setteo automático en falso
const auto = true;

// setteo tiempo de intervalo
const intervalTime = 5000;
let slideInterval;

// función para el botón que pasa a slide siguiente
const nextSlide = () => {
    // Selecciono la clase current
    const current = document.querySelector('.current');
    // Le saco la clase current
    current.classList.remove('current')

    // Veo si hay una siguiente slide
    if(current.nextElementSibling){
        // Le agrego la clase current a la siguiente slide
        current.nextElementSibling.classList.add('current');
    }else{
        // Agrego current al primer slide
        slides[0].classList.add('current');
    }

    // Saco la clase current con un delay
    setTimeout(() => current.classList.remove('current'));
}

// función para el botón de slide anterior
const prevSlide = () => {
    // Selecciono la clase current
    const current = document.querySelector('.current');
    // Le saco la clase current
    current.classList.remove('current')

    // Veo si hay una slide anterior
    if(current.previousElementSibling){
        // Le agrego la clase current a la slide anterior
        current.previousElementSibling.classList.add('current');
    }else{
        // Agrego current al último slide
        slides[slides.length - 1].classList.add('current');
    }

    // Saco la clase current con un delay
    setTimeout(() => current.classList.remove('current'));
}


// Eventos para botones
next.addEventListener('click', e => {
    nextSlide();
    if(auto){ // si está en automático...
        clearInterval(slideInterval); // reseteo el intervalo a cero
        slideInterval = setInterval(nextSlide, intervalTime) // vuelvo a poner el intervalo
    }

});

prev.addEventListener('click', e => {
    prevSlide();
    if(auto){ // si está en automático...
        clearInterval(slideInterval); // reseteo el intervalo a cero
        slideInterval = setInterval(nextSlide, intervalTime) // vuelvo a poner el intervalo
    }
});




// Slide automático

if(auto){   // Si auto es true...
    // Pasar de slide al tiempo de intervalo
    slideInterval = setInterval(nextSlide, intervalTime)
}


