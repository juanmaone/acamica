//Declaración de variables
var nombreUsuario = 'juanma';
var saldoCuenta = 25000;
var limiteExtraccion = 10000;
//variables de servicios
var nombreServicios = ["AGUA", "TELÉFONO", "LUZ", "INTERNET"];
var precioServicios = [350, 425, 210, 570];
//variables de transferencias
var cuentasAmigas = [1234567, 7654321];
//variables de inicio session
var codigoUsuario = "1234";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    if (iniciarSesion()) {
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    }
}


function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Ingrese el nuevo límite de extracción"));
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert("Se ha modificado su límite de extracción, ahora es " + limiteExtraccion);
}

function extraerDinero() {
    //  var dineroExtraido = parseInt(prompt("Dinero a Extraer"));
    var dineroExtraido = promptIntMayor0("Dinero a Extraer");
    //si no es cero sigue
    if (dineroExtraido !== 0)
        var saldoAux = saldoCuenta;

    if (validarExtraccion(dineroExtraido)) {
        restarDinero(dineroExtraido);
        alert("Ha extraido:  $" + dineroExtraido + "\n Saldo Anterior: $" + saldoAux + "\n Saldo Actual: $" + saldoCuenta);
    }
}

function validarExtraccion(dineroExtraido) {
    var operacionValidaBool = true;
    if (dineroExtraido % 100 == 0) {
        if (dineroExtraido > saldoCuenta) {
            alert('ATENCIÓN: EL MONTO DE EXTRACCIÓN SOLICITADA ES MAYOR A SU SALDO. \n NO PUEDE REALIZAR LA ACCIÓN SOLICITADA ');
            operacionValidaBool = false;
        } else if (dineroExtraido > limiteExtraccion) {
            alert('ATENCIÓN: EL MONTO DE EXTRACCIÓN SOLICITADA ES MAYOR A SU LÍMITE EXTRACCIÓN. \n NO PUEDE REALIZAR LA ACCIÓN SOLICITADA');
            operacionValidaBool = false;
        }
    } else {
        alert('ATENCIÓN: EL MONTO DE EXTRACCIÓN DEBE SER MÚLTIPLO DE 100 \n NO PUEDE REALIZAR LA ACCIÓN SOLICITADA ');
        operacionValidaBool = false;
    }
    return operacionValidaBool;
}

function restarDinero(dineroExtraido) {
    saldoCuenta -= dineroExtraido;
    actualizarSaldoEnPantalla();
}
function sumarDinero(dineroDepositado) {
    saldoCuenta += dineroDepositado;
    actualizarSaldoEnPantalla();
}

function depositarDinero() {
    var dineroDepositado = parseInt(prompt("Dinero a depositar"));
    var saldoAux = saldoCuenta;
    sumarDinero(dineroDepositado);
    alert("Ha depositado:  $" + dineroDepositado + "\n Saldo Anterior: $" + saldoAux + "\n Saldo Actual: $" + saldoCuenta);
}

function promptIntMayor0(msg) {
    var valorIngresado = prompt(msg);
    if (valorIngresado == "") {
        alert("Error: No ha ingresado ningún caracter");
    } else if (typeof valorIngresado !== 'number') {
        alert("Error debe ingresar un nùmero");
        if (valorIngresado <= 0)
            alert("Error debe ingresar un nùmero mayor a cero");
    }
    return valorIngresado;
}

function pagarServicio() {
    var msgServicios = "Ingrese el número que corresponde con el servicio que quiere pagar \n";
    for (var i = 1; i < nombreServicios.length + 1; i++) {
        msgServicios = msgServicios + i + " " + nombreServicios[(i - 1)] + "\n";
    }

    var servicio = parseInt(prompt(msgServicios));

    if (servicio <= nombreServicios.length && servicio >= 0) {
        if (precioServicios[(servicio - 1)] <= saldoCuenta) {
            var saldoAux = saldoCuenta;
            restarDinero(precioServicios[(servicio - 1)]);
            alert("El servicio " + nombreServicios[(servicio - 1)] + " se ha pagado.");
            nombreServicios.splice((servicio - 1), 1);
            precioServicios.splice((servicio - 1), 1);
        } else {
            alert("Su cuenta no dispone de saldo suficiente para la operación");
        }
    } else {
        alert("No existe el servicio que se ha seleccionado");
    }
}


function transferirDinero() {
    var montoATransferir = parseFloat(prompt("Ingrese monto a tranasferir"));
    if (montoATransferir > saldoCuenta) {
        alert("No se pudere realizar la operación saldo insuficiente. ");
    }
    //ingresar cuenta y verificar que sea amiga
    var cuentaATransferir = parseInt(prompt("Ingrese el nùmero de la cuenta "));
    if (cuentasAmigas.includes(cuentaATransferir)) {
        restarDinero(montoATransferir);
        alert("Se ha transferido " + montoATransferir + " \n a la cuenta " + cuentaATransferir);
    } else {
        alert("La cuenta a transferir debe ser una cuenta agendada");
    }
}

//función  login
function iniciarSesion() {
    var codigo = prompt("Ingrese su código de usuario");
    var validado = false;
    if (codigo !== codigoUsuario) {
        saldoCuenta = 0;
        alert('Código incorrecto: Tu dinero ha sido retenido por cuestiones de seguridad');
    } else {
        alert('Bienvenido ' + nombreUsuario + ' ya puedes comenzar a realizar operaciones');
        validado = true;
    }
    return validado;
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}