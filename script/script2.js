let Propietario, Modelo, Placa, tipo, fecha, hora, cantidad;

let formulario = document.getElementById('form')

formulario.addEventListener('submit',(e)=>{

    e.preventDefault()
    LeerData()
})

function LeerData() {
    Propietario = document.getElementById('Propietario').value;
    Modelo = document.getElementById('Modelo').value;
    Placa = document.getElementById('Placa').value;
    tipo = document.getElementById('tipo').value;
    hora = document.getElementById('hora').value;
    fecha = document.getElementById('Fecha').value;
    cantidad = document.getElementById('cantidad').value;
    ValidarData(Propietario, Modelo, Placa, tipo, fecha, hora, cantidad)
    GuardarLocalStore(Propietario, Modelo, Placa, tipo, fecha, hora, cantidad)
}
function ValidarData(Propietario, Modelo, Placa, tipo, fecha, hora, cantidad) {
    if(Propietario.length==0 || Modelo.length==0 || Placa.length==0 || tipo.length==0 || fecha.length==0 || hora.length==0 || cantidad.length==0){
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question',
          )
    }
}

function GuardarLocalStore(Propietario, Modelo, Placa, tipo, fecha, hora, cantidad) {
    localStorage.setItem('Propietario',Propietario )
    localStorage.setItem('Modelo',Modelo )
    localStorage.setItem('Placa',Placa )
    localStorage.setItem('tipo',tipo )
    localStorage.setItem('fecha',fecha )
    localStorage.setItem('hora',hora )
    localStorage.setItem('cantidad',cantidad )
    ListaData()
}


function ListaData(){
    let PropietarioUsu = localStorage.getItem('Propietario')
    let ModeloUsu = localStorage.getItem('Modelo')
    let PlacaUsu = localStorage.getItem('placa')
    let tipoUsu = localStorage.getItem('tipo')
    let fechaUsu = localStorage.getItem('fecha')
    let horaUsu = localStorage.getItem('hora')
    let cantidadUsu = localStorage.getItem('cantidad')
}
