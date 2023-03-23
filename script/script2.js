let pdv, mdv, placa, tdv, fecha, hora, cantidad;

let formulario = document.getElementById('form')

formulario.addEventListener('submit',(e)=>{

    e.preventDefault()
    LeerData()
})

function LeerData() {
    pdv = document.getElementById('pdv').value;
    mdv = document.getElementById('mdv').value;
    placa = document.getElementById('placa').value;
    tdv = document.getElementById('tdv').value;
    fecha = document.getElementById('fecha').value;
    hora = document.getElementById('hora').value;
    cantidad = document.getElementById('cantidad').value;
    ValidarData(pdv, mdv, placa, tdv, fecha, hora, cantidad)
    GuardarLocalStore(pdv, mdv, placa, tdv, fecha, hora, cantidad)
}
function ValidarData(pdv, mdv, placa, tdv, fecha, hora, cantidad) {
    if(pdv.length==0 || mdv.length==0 || placa.length==0 || tdv.length==0 || fecha.length==0 || hora.length==0 || cantidad.length==0){
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question',
          )
    }
}

function GuardarLocalStore(pdv, mdv, placa, tdv, fecha, hora, cantidad) {
    localStorage.setItem('pdv',pdv )
    localStorage.setItem('mdv',mdv )
    localStorage.setItem('placa',placa )
    localStorage.setItem('tdv',tdv )
    localStorage.setItem('fecha',fecha )
    localStorage.setItem('hora',hora )
    localStorage.setItem('cantidad',cantidad )
    ListaData()
}


function ListaData(){
    let pdvUsu = localStorage.getItem('pdv')
    let mdvUsu = localStorage.getItem('mdv')
    let placaUsu = localStorage.getItem('placa')
    let tdvUsu = localStorage.getItem('tdv')
    let fechaUsu = localStorage.getItem('fecha')
    let horaUsu = localStorage.getItem('hora')
    let cantidadUsu = localStorage.getItem('cantidad')
}