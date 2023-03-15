let nombre, correo, mensaje;

let formulario = document.getElementById('form')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    LeerData
})

function LeerData() {
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    mensaje = document.querySelector('#textareas').value;
    console.log(nombre)
}
function ValidarData(nombre, correo, mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        swall.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText:'Cool',
            iconColor:'purple'       
        })
    }
}
