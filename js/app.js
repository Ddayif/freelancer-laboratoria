/*
 * Archivo principal de JS
 */

 (function main(){
 	var trabajos = Array.from(document.getElementsByClassName("col-4"));
 	var nuevoDiv = document.getElementById("box-modal");
 	var mostrar, cerrar;
 	trabajos.forEach(function(el){
 		el.addEventListener("click", function(){
 			nuevoDiv.innerHTML = "";

 			mostrar = document.createElement("div");//crea un nuevo div dentro del ya existente
 			mostrar.classList.add("modal");
 			mostrar.innerHTML= el.innerHTML;// pega la clase encima del div vacio

 			
 		});
 	});

 })()