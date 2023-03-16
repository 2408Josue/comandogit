let nombre, correo, mensaje;

let formulario = document.getElementById('form')

formulario.addEventListener('submit',(e)=>{

    e.preventDefault()
    LeerData()
})

function LeerData() {
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    mensaje = document.querySelector('#textareas').value;
    ValidarData(nombre, correo, mensaje)
    GuardarLocalStore(nombre,correo,mensaje)
}
function ValidarData(nombre, correo, mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question',
          )
    }
}

function GuardarLocalStore(nombre,correo,mensaje) {
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Correo', correo)
    localStorage.setItem('Mensaje', mensaje)
    ListaData()
}


function ListaData(){
    let nombreUsu = localStorage.getItem('Nombre')
    let correoUsu = localStorage.getItem('Correo')
    let mensajeUsu = localStorage.getItem('Mensaje')
}
