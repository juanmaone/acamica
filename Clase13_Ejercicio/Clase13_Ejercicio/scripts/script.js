
//variables globales
var rombos = 0, cuadrados = 0, circulos = 0, picas = 0, triangulos = 0,
    totalFormas = 0, corazones = 0, diamantes = 0, treboles = 0;

function crearRombo(color) {
    /* Completar código */
    var forma = document.createElement("div");
    forma.classList.add("rombo");
    forma.classList.add(color);    
    return forma;
}

function crearCuadrado(color) {
    /* Completar código */
    var forma = document.createElement("div");
    forma.classList.add("cuadrado");
    forma.classList.add(color);
    return forma;
}
function crearCirculo(color) {
    var forma = document.createElement("div");
    forma.classList.add("circulo");
    forma.classList.add(color);
    return forma;
}

function crearTriangulo(color) {
    var forma = document.createElement("div");
    forma.classList.add("triangulo");
    forma.classList.add(color);
    return forma;
}


function crearCorazon(color) {
    var forma = document.createElement("div");
    forma.classList.add("corazon");
    forma.classList.add(color);
/*
    var h1 = document.createElement("span");
    hijo1.classList.add("lateral-uno");
    var hijo2 = document.createElement("span");
    hijo2.classList.add("centro");
    var hijo3 = document.createElement("span");
    hijo3.classList.add("lateral-dos");

    forma.appendChild(hijo1);
    forma.appendChild(hijo2);
    forma.appendChild(hijo3);
    */
   var h1 = document.createElement("span");
    h1.classList.add("lateral-uno");
    forma.appendChild.add(h1);
    h1.classList.replace("lateral-uno","centro")
    forma.appendChild.add(h1);
    h1.classList.add("centro","lateral-dos");
    forma.appendChild.add(h1);
    return forma;
}

function crearPica(color) {
    /* Completar código */
    var forma = document.createElement("div");
    forma.classList.add("pica");
    forma.classList.add(color);

    var hijo1 = document.createElement("span");
    hijo1.classList.add("lateral-uno");
    var hijo2 = document.createElement("span");
    hijo2.classList.add("centro");
    var hijo3 = document.createElement("span");
    hijo3.classList.add("lateral-dos");
    var hijo4 = document.createElement("span");
    hijo4.classList.add("base");

    forma.appendChild(hijo1);
    forma.appendChild(hijo2);
    forma.appendChild(hijo3);
    forma.appendChild(hijo4);

    return forma;
}

function crearDiamante(color) {
    /* Completar código */
    var forma = document.createElement("div");
    forma.classList.add("diamante");
    forma.classList.add(color);

    var hijo1 = document.createElement("span");
    hijo1.classList.add("tope");
    var hijo2 = document.createElement("span");
    hijo2.classList.add("base");

    forma.appendChild(hijo1);
    forma.appendChild(hijo2);

    return forma;
}

function crearTrebol(color) {

    var forma = document.createElement("div");
    forma.classList.add("trebol");
    forma.classList.add(color);

    var hijo1 = document.createElement("span");
    hijo1.classList.add("hoja-uno");
    var hijo2 = document.createElement("span");
    hijo2.classList.add("hoja-dos");
    var hijo3 = document.createElement("span");
    hijo3.classList.add("hoja-tres");
    var hijo4 = document.createElement("span");
    hijo4.classList.add("centro");
    var hijo5 = document.createElement("span");
    hijo5.classList.add("base");

    forma.appendChild(hijo1);
    forma.appendChild(hijo2);
    forma.appendChild(hijo3);
    forma.appendChild(hijo4);
    forma.appendChild(hijo5);

    return forma;
}

/* Ejercicio 2 */
function agregarInfo(informacion) {

    var contenedor = document.getElementById("contenedor");
    var rec = document.createElement("div");
    rec.classList.add("info");
    rec.innerHTML = informacion;
    contenedor.appendChild(rec);
}

/* Código necesario para darle funcionalidad a los botones de la página */
var ingresarInfo = document.getElementById('ingresar-info');
ingresarInfo.addEventListener('click', cargarFormas);

var botonProcesarInfo = document.getElementById('procesar-info');
botonProcesarInfo.addEventListener('click', procesarInfo);

/* Ejercicio 3 */
var formaSolicitada;
function cargarFormas() {
    var forma = prompt("Ingresa la forma a dibujar:", "");
    var color = prompt("Ingresa su color:", "");
    var formaSolicitada;
    
    switch (forma) {
        case "rombo":
            formaSolicitada = crearRombo(color);
            rombos++;
            break;
        case "cuadrado":
            formaSolicitada = crearCuadrado(color);
            cuadrados++;
            break;
        case "circulo":
            formaSolicitada = crearCirculo(color);
            circulos++;
            break;
        case "triangulo":
            formaSolicitada = crearTriangulo(color);
            triangulos++;
            break;
        case "diamante":
            formaSolicitada = crearDiamante(color);
            diamantes++;
            break;
        case "trebol":
            formaSolicitada = crearTrebol(color);
            treboles++;
            break;
        case "corazon":
            formaSolicitada = crearCorazon(color);
            corazones++;
            break;
        case "pica":
            formaSolicitada = crearPica(color);
            picas++;
            break;

        default:
            console.log("Default ");
            break;
    }

    var columna ="";
  
    switch (color) {

        case "naranja":
            columna = document.getElementById("columna-naranja");
            totalFormas++;
            break;
        case "rosa":
            columna = document.getElementById("columna-rosa");
            totalFormas++;
            break;
        case "verde":
            columna = document.getElementById("columna-verde");
            totalFormas++;
            break;
        default:

            break;
    }
    columna.appendChild(formaSolicitada);
}

/* Ejercicio 5 */
function procesarInfo() {

    var botonProcesarInfo = document.getElementById('procesar-info');
    botonProcesarInfo.classList.add('ocultar');

    var columna1 = document.getElementById("columna-naranja").childElementCount - 1;
    var columna2 = document.getElementById("columna-rosa").childElementCount - 1;
    var columna3 = document.getElementById("columna-verde").childElementCount - 1;

    agregarInfo("Formas naranja " + columna1);
    agregarInfo("Formas rosa " + columna2);
    agregarInfo("Formas verde " + columna3);
    //rombo,cuadrado,circulo,triangulo
    //diamante,trebol,corazon,pica

    agregarInfo("Rombos " + rombos);
    agregarInfo("Cuadrados " + cuadrados);
    agregarInfo("Circulos " + circulos);
    agregarInfo("Triángulos " + triangulos);
    agregarInfo("Diamantes " + diamantes);
    agregarInfo("Tréboles " + treboles);
    agregarInfo("Corazones " + corazones);
    agregarInfo("Picas " + picas);
    agregarInfo("Total formas " + totalFormas);
    agregarInfo("Total formas child " + (columna1+columna2+columna3));



}
