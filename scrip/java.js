
    var numImagen = 1;
var anterior=document.querySelector(".gallery__back");
var siguiente=document.querySelector(".gallery__next");
var p1=document.querySelector(".p1");
var p2=document.querySelector(".p2");
var p3=document.querySelector(".p3");
var p3=document.querySelector(".p4");
mostrarImagenes(numImagen);

anterior.addEventListener('click', function() {
otraImagen(-1);
})

siguiente.addEventListener('click', function() {
  otraImagen(1);
})

function otraImagen(n) {
    mostrarImagenes(numImagen += n);
}

function imagenActual(n) {
    mostrarImagenes(numImagen = n);
}

p1.addEventListener('click', function(){
  imagenActual(1)
})
p2.addEventListener('click', function(){
  imagenActual(2)
})

p3.addEventListener('click', function(){
imagenActual(3)
})

p4.addEventListener('click', function(){
  imagenActual(4)
})


function mostrarImagenes(n) {
  var i;
  var slides = document.querySelectorAll(".gallery__imagen");
  var puntos = document.querySelectorAll(".gallery__punto");

  if (n > slides.length) {numImagen = 1}    
  if (n < 1) {numImagen = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < puntos.length; i++) {
    puntos[i].className = puntos[i].className.replace(" active", "");
  }
  slides[numImagen-1].style.display = "block";  
  puntos[numImagen-1].className += " active";

}
