let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');
let formulario = document.getElementById('formulario');
let data = 'https://api-crud14.herokuapp.com/usuarios'

formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('historia').value
    let correo = document.getElementById('correo')
});

