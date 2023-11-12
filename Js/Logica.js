
var nombres = document.getElementById("nombres");
nombres.addEventListener("keydown", textModified);

var identificacion = document.getElementById("identifica");
identificacion.addEventListener("keydown",textModified);

var correoElectronico = document.getElementById("gmail");
correoElectronico.addEventListener("keydown", textModified);

var contactoTelefonico = document.getElementById("celular");
contactoTelefonico.addEventListener("keydown", textModified);


function textModified(){
    var nombre = document.getElementById('name')
    nombre.innerText = nombres.value;

    var cc = document.getElementById('Cedula');
    cc.innerText = identificacion.value;
    
    var electronico = document.getElementById('correo');
    electronico.innerText = correoElectronico.value;

    var telefonico = document.getElementById('phone');
    telefonico.innerText = contactoTelefonico.value;
    
}

function carrito(){

}