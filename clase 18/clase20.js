 var notas= [
             ['JUAN',8],
             ['JOSE',7],
             ['SOFIA',5],
             ['LUANA',3],
            ];

function estaAprobado (nota,notaAprobado){
    return nota <notaAprobado;
}


function mostrarNotas(){
    for (var i = 0; i<notas.length; i++){
       if(notas[i][1]>=6){
           console.log('La nota de '+notas[i][0]+'es '+notas[i][1]+' APROBADA');
       } else {
           console.log('La nota de '+notas[i][0]+'es '+notas[i][1]+' DESAPROBADA ');
       }

    }
}

function mostarNotasFacu(){
    for (var fila =0; fila<notas.length; fila ++){
        for (var columna = 0; columna< notas[fila].length; columna++){
            console.log(notas[fila][columna])
        }
    }
}

var matriz =[
                [1,3,8,8,4],
                [1,5,5,4,1],
                [1,5,5,8,8],
                [1,5,3,8,6],
                [1,3,8,8,4],
                [1,5,5,4,1],
                [1,5,5,8,8],
                [1,5,3,8,6],
                [1,3,8,8,4],
                [1,5,5,4,1],
                [1,5,5,8,8],
                [1,5,3,8,6],
            ];

function sumarFilas(){
    var suma = 0;
    for (var fila = 0; fila<matriz.length; fila++){
        suma=0;
        for (var columna = 0;matriz[fila].length;columna++ ){
           suma += matriz[fila][columna]; 
        }
        console.log('LA SUMA DE LA FILA NUMERO '+(fila+1)+' es igual a '+suma);
    }
}

function sumarFilas(fila,qcolumna,matriz){
    var suma = 0;
    for (var i=0; i<qcolumna; i++){
        suma+= parseInt(matriz[fila][i]) ;
    }
    console.log('LA SUMA DE LA FILA NUMERO '+(fila+1)+' es igual a '+suma);
}
       
function sumarColumnas(columna,qfilas,matriz){
    var suma = 0;
    for (var i=0; i<qfilas; i++){
        suma+= parseInt(matriz[i][columna]) ;
    }
    console.log('LA SUMA DE LA COLUMNA NUMERO '+(fila+1)+' es igual a '+suma);
}

//console.log(sumarColumnas(0,2,matriz));


//sumarFilas(); 

function sumarTodo(){

}

function arbolito(ramas){
    for (var i=0;i<ramas;i++){
         var linea ="";
        for(var j=1;j<i+2;j++){            
            linea =linea+j+' ';    
        }
        console.log(linea+'\n');    
    }
}
arbolito(5);

var matrizArbolito = new Array();

function arbolito2(ramas){
    for (var i=0;i<ramas;i++){
        var lineArray =new Array()
        for(var j=1;j<i+2;j++){            
            lineArray.push(j);   
        }
        matrizArbolito.push(lineArray);
           
    }
}

var lineArray3 =new Array();

var matrizArbolito3 = new Array();

function arbolito3(ramas){
    for (var i=1;i<ramas;i++){
        var linea = new Array();
         linea.push(i);
        lineArray3.push(linea);   
        matrizArbolito3.push(lineArray2);          
    }
}
arbolito3(5);
matriz1 = [
    [1,3],
    [2,5]
];

matriz2 = [
[1,3],
[2,5]
];

function sonIguales(m1,m2){
    var cantFilasMatriz1= m1.length;
    var cantColumnasMatriz1 = (cantFilasMatriz1>0) ? m1[0].length : 0;
    var cantFilasMatriz2 = m2.length;
    var cantColumnasMatriz2 = (cantFilasMatriz2>0) ? m2[0].length : 0

    console.log();
    console.log()
    console.log()
    console.log()
}

