//podemos escribir codigo JavaScript
//var nombre = "Martin"
var nombre = 'Ricardo';
var SegundoNombre = 'Martin';
var CI = '1718139205';
SegundoNombre = 'MARTIN';
//CI = '1708712664' // error     es un tipo READ-Only
var URL_POLI = 'https://www.epn.edu.ec';
//SegundoNombre = 123; // Duck Typing
//tipos de dato
var string = "abcdefghijklmnopqrtuvwxyz";
var numero = 1234567890;
var fecha = new Date();
var booleano = true;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
        "";
    }
    Usuario.prototype.ImprimirEnConsola = function () {
        //Template String TIDE INVERTIDA
        console.log("El usuario se llama " + this.mNombre + " su cedula es " + this.mCedula + " y tiene " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Gabriela', 27, '1718191415');
//
