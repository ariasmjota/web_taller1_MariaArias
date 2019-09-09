
    var numImagen = 1;
var anterior=document.querySelector(".galeria__anterior");
var siguiente=document.querySelector(".galeria__siguiente");
var p1=document.querySelector(".p1");
var p2=document.querySelector(".p2");
var p3=document.querySelector(".p3");
mostrarImagenes(numImagen);

function otraImagen(n) {
    mostrarImagenes(numImagen += n);
}

/*anterior.addEventListener('click',otraImagen(-1));
siguiente.addEventListener('click',otraImagen(1));*/

function imagenActual(n) {
    mostrarImagenes(numImagen = n);
}
/*p1.addEventListener('click',imagenActual(1));
p2.addEventListener('click',imagenActual(2));
p3.addEventListener('click',imagenActual(3));*/

function mostrarImagenes(n) {
  var i;
  var slides = document.querySelectorAll(".galeria__imagen");
  var puntos = document.querySelectorAll(".galeria__punto");

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
