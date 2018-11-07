var numero, acumulador, answer = 'y', i;



function tablaDoWhile() {
    i = 1;
    j = 0;

    while (i <= 10) {
        console.log("Tabla del " + i)
        while (j <= 10) {
            console.log(i + " x" + j + "=" + i * j);
            j++;
        }
        j = 0;
        i++;
    }
}

function buscarPrimo() {
    var nroIngresado = parseInt(prompt("Ingrese nro a evaluar si es primo"));
    var resultado = "ES PRIMO EL NRO";
    if (nroIngresado < 2) {
        resultado = "NO ES PRIMO EL NRO";
    }
    var i = 1;

    while (i < nroIngresado) {

        if (nroIngresado % i == 0) {
            resultado = "NO ES PRIMO EL NRO";
            break;
        }
        i++;
    }

    respuestaPrimo(resultado + " " + nroIngresado, "respuestaPrimo");
}

function buscarPrimoFacu(numero) {
    if (numero < 2) {
        return false;
    }
    var divisor = 2;
    var encontreUnDivisor = false;

    while (!encontre) {
        encontreUnDivisor = numero % divisor == 0;
        divisor++;
    }

    return ((divisor - 1) == numero);
    // respuestaPrimo(resultado+" "+nroIngresado,"respuestaPrimo");
}

function esPrimoFacu2(numero) {
    var divisores = 0;
    for (var i = 2; i <= numero; i++) {
        divisores = (numero % i == 0) ? divisores + 1 : divisores;
    }
    return divisores == 1;
    // respuestaPrimo(resultado+" "+nroIngresado,"respuestaPrimo");
}

console.log('0', esPrimoFacu2(0));
console.log('1', esPrimoFacu2(1));
console.log('2', esPrimoFacu2(2));
console.log('11', esPrimoFacu2(11));
console.log('77', esPrimoFacu2(77));
console.log('79', esPrimoFacu2(79));


function respuestaPrimo(resultadoAMostrar, idParrafo) {
    document.getElementById(idParrafo).innerHTML = resultadoAMostrar;
}

function mostrarPrimos(numero) {
    var nro = parseInt(prompt("INGRESE EL NRO TOPE", ""));

    if (nro < 0) {
        return "EL NRO ES NEGATIVO";
    } else {

    }
}

function mcm(nr1, nro2) {
    var encontrado = false;
    var prueba = nro2;
    for (prueba; i < nro1 * nro2; prueba++) {
        if (prueba % nro1 == 0 && prueba % nro2 == 0) {
            resultado = true;
            console.log("El mcm es " + prueba);
            prueba = nro1 * nro2;
            document.getElementById(idParrafo).innerHTML = "El mcm es " + prueba;
        }
    }

}









//zbellagio [19:28]
//MAXIMO COMUN DIVISOR
function maximoDivisor(num1, numx2) {
    var tope = (num1 <= num2) ? num1 : num2;//CON TERNA ? : SI PASA ALGO SE CUMPLE ALGO, SI NO TAL COSA
    do {
        if (num1 % tope == 0 && num2 % tope == 0) { //&& es igual a Y divide a este y a este
            return tope;
        }
        else {
            tope--;
        } while (tope > 0)
}
}