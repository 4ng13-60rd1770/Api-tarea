export const find = async (arrayFind, email) =>{
    let findEmail = arrayFind.find(user=>user.correo === email)


const {nombre, apellido, correo, id} = findEmail
document.getElementById('name').value = nombre
document.getElementById('lastName').value = apellido
document.getElementById('email').value = correo
document.getElementById('id').value = id
}