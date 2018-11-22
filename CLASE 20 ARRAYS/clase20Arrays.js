function mcm(nro1, nro2) {
    var encontrado = false;
    var prueba = nro2;
    for (prueba; prueba <= nro1 * nro2; prueba++) {
        if (prueba % nro1 == 0 && prueba % nro2 == 0) {
            resultado = true;
            console.log("El mcm es " + prueba);
            prueba = nro1 * nro2;
            document.getElementById("respuestaPrimo").innerHTML = "El mcm es " + prueba;
        }
    }

}


function mcm2(a, b) {
    var mayor = (a > b) ? a : b;
    console.log(mayor);
    for (var i = mayor; i <= a * b; i++) {
        if (esDivisiblePor(i, a) && esDivisiblePor(i, b)) {
            console.log("El mcm es " + i);
            i = a * b;
        }
    }

}

function esDivisiblePor(nro1, nro2) {
    return nro1 % nro2 == 0;
}

function mcmDoWile(nro1, nro2) {
    var mayor = (a > b) ? a : b;
    var i = mayor;
    do {
        i++;
    } while (!(i % nro1 == 0) && (i % nro2 == 0))

    document.getElementById("respuestaPrimo").innerHTML = "El mcm es " + i;
}

var listaColores = [];
var colores = new Array("Azul", "Verde", "Rojo", "Amarillo", "Anaranjado", "Negro", "Ocre");
var contadores = [0, 0, 0, 0, 0, 0, 0];
function contarColores() {

    listaColores.forEach(element => {
        switch (element) {
            case "Azul":
                console.log("entra" + element);
                contadores[0] = parseInt(contadores[0]) + 1;
                break;
            case "Verde":
                contadores[1] = parseInt(contadores[1]) + 1;
                break;
            case "Rojo":
                contadores[2] = parseInt(contadores[2]) + 1;
                break;
            case "Amarillo":
                contadores[3] = parseInt(contadores[3]) + 1;
                break;
            case "Anaranjado":
                contadores[4] = parseInt(contadores[4]) + 1;
                break;
            case "Negro":
                contadores[5] = parseInt(contadores[5]) + 1;
                break;
            case "Ocre":
                contadores[6] = parseInt(contadores[6]) + 1;
                break;
                defautl:
                console.log(element);
                break;

        }
    });

    for (var i = 0; i < contadores.length; i++) {
        console.log("Total de " + colores[i] + " es de  " + contadores[i] + "\n");
    }


}

function cargarColores() {
    do {
        var nroColor = prompt("Seleccione un color para agregar 0-6, N para contar totales \n \n");
        if (nroColor != "N")
            listaColores.push(colores[parseInt(nroColor)]);

    } while (nroColor != "N")
    contarColores();
}

var notas = [];
function cargarNotas() {
    do {
        var nota = prompt("Agregue una nota \n, N para detenerse");
        if (nota != "N")
            notas.push(parseInt(nota));

    } while (nota != "N")
    calcularPromedio();
    calcularAprobados();
}

function calcularPromedio() {
    var suma = 0;
    for (var i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    var promedio = suma / notas.length;
    console.log("El promedio es " + promedio);

}

function calcularAprobados() {
    var aprobados = 0;
    var desaprobados = 0;
    for (var i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    var promedio = suma / notas.length;
    console.log("El promedio es " + promedio);

}
//cargarNotas();


var alumnos = [
    'Valula', 8,
    'Zoraida', 6,
    'Hernan', 2
];

function mostarAlumnos() {
    for (var i = 0; i < alumnos.length; i = i + 2) {
        console.log('La nota de ' + alumnos[i] + ' es ' + alumnos[i + 1]);
    }
}

mostarAlumnos();


function mostrarPiramide(piramide) {
    var renglon = '';
    var filas = piramide.length;
    var columnas = (filas > 0) ? piramide[0].length : 0;
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {
            renglon += piramide[i][j];
        }
        console.log(renglon);
        renglon = '';
    }
}

//nos  devuelve la cantidad de espacios en blanco que hay de un lado y  
//del otro de los ladrillos en una fila particular
function espaciosEnBlanco(anchoTotalDeLaPiramida,cantidadDeBloquesPintados){
    return (anchoTotalDeLaPiramida-cantidadDeBloquesPintados)/2;
}

//nos devuelve una fila de la pirámide compuest ade ceros y unos
//  ej armarFila (3,5) nos devuelve [0,1,1,1,0]

function armarFila(cantidadDeLadrillosPintados,anchoTotalDeLaPiramide){   
  /*  for(var i=0;i<anchoTotalDeLaPiramide;i++){
        if (i<espaciosEnBlanco(anchoTotalDeLaPiramide,cantidadDeLadrillosPintados)){
            fila.push(0);
        }else{
            fila.push(1);
        }
    }
    */
   var filaM=[];
    for (var i=0;i<espaciosEnBlanco(anchoTotalDeLaPiramide,cantidadDeLadrillosPintados);i++){
        filaM.push(0);
    }
    for (var i=0;i<cantidadDeLadrillosPintados;i++){
        filaM.push(1);
    }
    for (var i=0;i<espaciosEnBlanco(anchoTotalDeLaPiramide,cantidadDeLadrillosPintados);i++){
        filaM.push(0);
    }
    return filaM;
}

var matrizPintada=[];
function armarMatriz(anchoTotalDeLaPiramide){
    for(var i=1;i<anchoTotalDeLaPiramide ;i=i+2){
       matrizPintada.push(armarFila(i,anchoTotalDeLaPiramide));
    }
}