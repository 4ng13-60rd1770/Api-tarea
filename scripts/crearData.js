const crearUsuario = ()=> {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("historia");
    let correo = document.getElementById("correo")

    console.log(nombre, apellido, correo); 

    const usuario = {
        nombre,
        apellido,
        correo, 
    }

    return usuario;

}
export default CrearUsuario;