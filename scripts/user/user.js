import { postApi } from "./agregarApi.js";
import CrearUsuario from "./crearData.js";

let Guardar =document.getElementById("btnGuardar");
let formulario = document.getElementById('formulario');
let url = 'https://api-crud14.herokuapp.com/usuarios'
let objetoUsuario ={}
let arrayDatos = []

   

formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
    objetoUsuario = CrearUsuario()
    postApi(url, objetoUsuario)
    console.log(objetoUsuario)
})




