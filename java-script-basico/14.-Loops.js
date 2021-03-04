//Como recorrer un array ---->
var estudiantes = ["Maria","Sergio","Rosa","Armando"];


function saludarEstudiantes(estudainte){
    console.log("Hola Bienvenido :" + estudainte);
}

//For ---- inicializas una variable
for(var i=0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//For of--- 
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}



