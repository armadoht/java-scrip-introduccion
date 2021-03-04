//Sintaxis
var person = {
    name: "armando",
    ege:"32",
    lastname:"huerta",
    detalleDePersona: function () {
        console.log(`Mi nombre es: ${this.name} ${this.lastname}`);
    }
};

person.lastname;

person.detalleDePersona();

