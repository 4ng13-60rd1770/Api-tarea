import { postApi } from "./agregarUser.js";
import CrearUser from "./crearUser.js";
import { getApi } from "./getUser.js";
import { listarUsuario } from "./showUser.js";

let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

let formulario = document.getElementById('formulario');
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

    let email = document.getElementById('email').value
    
    console.log(email)
    let resp = await fetch(url)
    let data = await resp.json()

   let buscarCorreo= data.find(user => user.correo === email)

    console.log(buscarCorreo)

    const {nombre, apellido, correo, id} = buscarCorreo
    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
   // document.getElementById('id').style.display='block'
  //  document.getElementById('label-edit').style.display='block'
    document.getElementById('id').value = id


})


//-------------Editar---------------/
btnEditar.addEventListener('click', async ()=>{
    let nameM = document.getElementById('name').value;
    let lastNameM = document.getElementById('lastName').value;
    let emailM = document.getElementById('email').value
    let idM= document.getElementById('id').value

    console.log(url+idM)
    let resp = await fetch(url+idM, {
        method: 'PUT',
        body: JSON.stringify({
            nombre: nameM,
            apellido:lastNameM,
            correo: emailM,
            id: idM
        }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    let data = await resp.json()
    console.log(data)
    
})


//------------Eliminar----------------/

btnEliminar.addEventListener('click', async() =>{
    let idEliminar = document.getElementById('id').value

    let resp = await fetch(url+idEliminar, {
        method: 'DELETE'
    })
    let data = await resp.json()
    console.log(data)

})