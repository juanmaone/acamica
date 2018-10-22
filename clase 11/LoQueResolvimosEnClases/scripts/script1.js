function procesar() {
  var numero = document.getElementById('numero1').value;
  alert('el numero es '+numero);
  document.getElementById("demo").innerHTML='hola';
}

function sumar() {   console.log('La suma e22s ');
 
  console.log('La suma es ');
  var resultado = sumar(numero1,numero2);
   console.log(resultado);
}


// Chequear si el número ingresado se encuentra (0; 13]U[56; 89]
 function procesar2() {
   var numero = document.getElementById('numero1').value;
  if (numero > 0 && numero <= 13 || numero >= 56 && numero <= 89) {
         console.log('El número es válido');
  } else {
     console.error('El número no es válido');
  }
  var numero1 = document.getElementById('numero1').value;
  var numero2 = document.getElementById('numero2').value;

  console.log(sumar(numero1,numero2));
}

function suma() {
 var numero1 = document.getElementById('numero1').value;
 var numero2 = document.getElementById('numero2').value;

 console.log(sumar(numero1,numero2));
}

function sumar(num1,num2){
  
  var res= document.getElementById('resultado').value=parseInt(num1)+parseInt(num2);
  return num1+num2;
}

function resta() {
  var numero1 = document.getElementById('numero1').value;
  var numero2 = document.getElementById('numero2').value;
 
  console.log(restar(numero1,numero2));
 }

 function restar(num1,num2){
  
  var res= document.getElementById('resultado').value=parseInt(num1)-parseInt(num2);
  return num1+num2;
}


function sumarStock(){
  var numero1 = document.getElementById('stockActual').value;
  var numero2 = document.getElementById('cantidadDeCajas').value;
  descripcionIngresoDeStock(numero1,numero2);
}

function descripcionIngresoDeStock(stockActual,cantidadDeCajas){
 var stockCajas=parseInt(stockActual)+parseInt(cantidadDeCajas);
  console.log('Ingresaron '+cantidadDeCajas+', tenìas '+stockActual+' El stock actual es de '+stockCajas+' cajas.');
  stockCajas=+cantidadDeCajas;

}

function restarStock() {
  var numero1 = document.getElementById('stockActual').value;
  var numero2 = document.getElementById('cantidadDeCajas').value;
  descripcionIngresoDeStock(numero1,numero2);
}

function descripcionEgresoDeStock(stockActual,cantidadDeCajas) {
 var stock=parseInt(stockActual)-parseInt(cantidadDeCajas);
  console.log('Egresaron '+cantidadDeCajas+', tenìas '+stockActual+' El stock actual es de '+stock+' cajas.');
  stockCajas=+cantidadDeCajas;
}



// Chequear si el número ingresado es positivo, no hago nada si no es positivo.
// function procesar() {
//   var numero = document.getElementById('numero').value;
//   if (numero > 0) {
//     console.log('El numero es positivo');
//   }
// }

// Chequear si el número ingresado es mayor a 5000
// function procesar() {
//   var numero = document.getElementById('numero').value;
//   if (numero > 5000) {
//     console.log('El numero es mayor a 5000');
//   } else {
//     console.error('El numero es menor o igual a 5000');
//   }
// }

// Chequear si el número ingresado es igual a la palabra 'Acamica'
// function procesar() {
//   var numero = document.getElementById('numero').value;
//   if (numero == 'Acamica') {
//     console.log('La palabra es igual a Acamica');
//   } else {
//     console.error('La palabra no es igual a Acamica');
//   }
// }

// El anterior con toUpperCase()
// function procesar() {
//   var numero = document.getElementById('numero').value;
//   console.log(numero.toUpperCase());
//   if (numero.toUpperCase() == 'ACAMICA') {
//     console.log('La palabra es igual a Acamica');
//   } else {
//     console.error('La palabra no es igual a Acamica');
//   }
// }

// Condiciones nesteadas, si es un entero y mayor o igual a 5000
// function procesar() {
//   var numero = document.getElementById('numero').value;
//   if (Number.isInteger(parseInt(numero))) {
//     console.log(parseInt(numero));
//     if(numero >= 5000) {
//       console.log('el numero es mayor o igual a 5000');
//     } else {
//       console.log('es numero pero menor a 5000');
//     }
//   } else {
//     console.error('no es un entero');
//   }
// }

// Chequear si un numero es par o impar, usando la negación !
// function procesar() {
//   var numero = document.getElementById('numero').value;
//   if (!(numero % 2 == 0)) {
//     console.log('el numero es impar');
//   } else {
//     console.log('el numero es par');
//   }
// }
