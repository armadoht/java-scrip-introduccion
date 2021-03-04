//Piedra, Papel o Tigera
var piedra = 1;
var papel = 2; 
var tigeras = 3;
var min = 1; 
var max = 3;

console.log("Jugemos piedra,papel o tigeras:");
console.log("Selecciona alguna de las siguientes opciones \n "
+" 1.- piedra \n"
+" 2.- papel\n"
+" 3.- tigeras\n");


//Jugador 1 maquina
var jugador1 = function () {
    return Math.floor(Math.random() * (max - min) + min);
}

//Jugador 2 maquina
var jugador2 = function (valor){
    if(valor === piedra){
        return piedra;
    }else if(valor === papel){
        return papel;
    }else if(valor === tigeras){
        return tigeras;
    }else{
        return 4;
    }
}

console.log(jugador1());