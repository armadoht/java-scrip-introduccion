//declaracion de un array
var semana = ["Lunes","Martes","Miercoles","Jueves","Viernes"];

console.log(semana);
semana.length //longitud del array
semana[0];

var todosLosDias = semana.push("Sabado"); //agregamos un valor al array

var ultimo = semana.pop("Sabado"); //Elimina el ultimo valor del array

var nuevaLongitud = semana.unshift("Domingo"); //Agregas un valor a inicio de tu array

var borrarDato = semana.shift("Domingo");//Borra el primer valor del array

var posicion = semana.indexOf("Miercoles");//Nos da la posicion de los valores en una array

