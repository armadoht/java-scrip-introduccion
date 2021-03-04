//Hoisting
//Las variables y funciones se declaran antes que se 
//procese cualquier tipo de codigo


console.log(myName)
var myName = "armando";
//undefined

hey();

function hey(){
    console.log("Hola");
}