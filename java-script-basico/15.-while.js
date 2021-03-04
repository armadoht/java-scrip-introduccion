//Como recorrer un array ---->
var estudiantes = ["Maria","Sergio","Rosa","Armando"];

function saludarEstudiantes(estudainte){
    console.log("Hola Bienvenido :" + estudainte);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}