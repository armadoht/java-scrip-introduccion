// Funciones declarativas
function miFuncion(){
    return 3;
}

//Funcion de expresion / Anonimas
var miFuncion = function(a,b) {
    return a + b;
}

miFuncion();


function sumar(a,b){
    var resultado = a + b;
    return resultado;
}

sumar(1,2); //3