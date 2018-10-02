
/*CONSOLE, puedo verificar al cargár la página el linkeo del archivo de script */
console.log('iniciado la llamada al archivo de scrpt')
/* */
var titulo = document.getElementById("titulo");
titulo.addEventListener("click", cartel1);

var recuadro = document.getElementById("recuadro");

recuadro.addEventListener("click",cambiarCss);
recuadro.addEventListener("mouseover",cambiarCssOver);

function cambiarCss(){
    recuadro.style.backgroundColor = "yellow";
    recuadro.style.borderStyle = "dashed";
   
}


function cambiarCssOver(){
    
    recuadro.classList.add("recuadroVolado");
}

var boton = document.getElementById("boton");
boton.addEventListener("click", saludar2);

function cartel1() {
    console.log('hola TITULO');
    alert('SOY 1');
    
}

function saludar2() {
    console.log('hola BOTON');
    alert();
}