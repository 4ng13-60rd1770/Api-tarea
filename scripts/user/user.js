import { postApi } from "./agregarUser.js";
import CrearUser from "./crearUser.js";
import { find } from "./findUser.js";
import { getApi } from "./getUser.js";
import { listarUsuario } from "./showUser.js";

let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

let formulario = document.getElementById('formulario');
let usuarios = document.getElementById('listarUsuario');
const url= 'https://api-crud14.herokuapp.com/usuarios';

let objetoUsuario = {}
let arrayDatos = []



//------------Guardar----------------/
formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
  objetoUsuario = CrearUser()
  postApi(url, objetoUsuario)
  console.log (objetoUsuario)
  alert('Usuario Guardado con Exito')

})
document.addEventListener('DOMContentLoaded', async()=>{
    arrayDatos= await getApi(url)
    listarUsuario(arrayDatos,listarUsuario)
 })
 
//------------Buscar----------------/
btnCorreo.addEventListener("click", async () =>{

    let arrayDatos = await getApi(url);
    let email = document.getElementById('email').value;
    find(arrayDatos,email);

})


//-------------Editar---------------/


//------------Eliminar----------------/

