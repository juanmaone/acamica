var numero, acumulador, answer ='y',i;

function promedio (){
    for (i=0;answer=='y';i++){
        answer = parseInt("Ingrese un valor");
        
        answer = parseInt("Ingrese un valor, y para continuar");
    }
    promedio=acumulador/i;
console.log("El promedio es",promedio);
}

var i,j=0;
function promedio2iteradores(){
  
    for (i=1;i<=10;i++){
        console.log("Tabla del ",i);
        for(j=0;j<10;j++){
            console.log(i+"x"+j+"="+(i*j));
        }

    }
}
var entrada;
var k=0;
function whilePow(){
// while(condicion)
    while (k<10){        
        console.log(Math.pow(2,k));
        k++;
    }
}

//mostrar las potencias de dos hasta 2 a la 10
function doWhileTest(){
    k=0;
    do {
        console.log(Math.pow(2,k));
        k++;
    }while(k<=10)
}
//tablas
function tablaWhile(){
    i=1;
    j=0;

    while(i<=10){
        console.log("Tabla del"+i)
        while(j<=10){
            console.log(i+" x"+j+"="+i*j);
            j++;
        }
        j=0;
        i++;
    } 
}

function tablaDoWhile(){
    i=1;
    j=0;
    
    while(i<=10){
        console.log("Tabla del "+i)
        while(j<=10){
            console.log(i+" x"+j+"="+i*j);
            j++;
        }
        j=0;
        i++;
    } 
}
