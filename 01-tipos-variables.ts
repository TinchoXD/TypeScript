//podemos escribir codigo JavaScript
var nombre = "Martin"
let nombre = 'Ricardo'
let SegundoNombre = 'Martin'
const CI = '1718139205'


SegundoNombre = 'MARTIN'

//CI = '1708712664' // error     es un tipo READ-Only

const URL_POLI = 'https://www.epn.edu.ec'


//SegundoNombre = 123; // Duck Typing


//tipos de dato

let string: String = "abcdefghijklmnopqrtuvwxyz"
let numero: Number = 1234567890
let fecha: Date = new Date();
let booleano: boolean = true;

class Usuario {
    public mNombre: String
    private mEdad: Number
    protected mCedula: String

    constructor(nombre: String,
                edad: Number,
                cedula: String) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;``

    }
    public ImprimirEnConsola(){
        //Template String TIDE INVERTIDA
        console.log(`El usuario se llama ${this.mNombre} su cedula es ${this.mCedula} y tiene ${this.mEdad}`)
    }
}


let usuario: Usuario = new Usuario('Gabriela',27,'1718191415')
