const CrearUser = () =>{
    let nombre = document.getElementById ('name').value;
    let apellido = document.getElementById ('lastName').value;
    let correo = document.getElementById ('email').value;


    console.log(nombre,apellido,correo,id)

    const user = {
        nombre, 
        apellido, 
        correo, 
        
    }
    return user
}

export default CrearUser