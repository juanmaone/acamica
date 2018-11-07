function mcm(nro1, nro2) {
    var encontrado = false;
    var prueba = nro2;
    for (prueba; prueba<= nro1 * nro2; prueba++) {
        if (prueba % nro1 == 0 && prueba % nro2 == 0) {
            resultado = true;
            console.log("El mcm es " + prueba);
            prueba = nro1 * nro2;
            document.getElementById("respuestaPrimo").innerHTML = "El mcm es " + prueba;
        }
    }

}


function mcm2(a,b){
    var mayor=(a>b)?a:b;
    console.log(mayor);
    for (var i=mayor;i<=a*b;i++){
        if(esDivisiblePor(i,a)&&esDivisiblePor(i,b)){
            console.log("El mcm es "+i);
            i=a*b;
        }
    }

}

function esDivisiblePor(nro1,nro2){    
    return nro1 % nro2 ==0;
}

function mcmDoWile(nro1,nro2){
    var mayor= (a>b)? a:b;
    var i=mayor;
    do{
        i++;
    }while(!(i%nro1==0)&&(i%nro2==0))

    document.getElementById("respuestaPrimo").innerHTML = "El mcm es " + i;
}