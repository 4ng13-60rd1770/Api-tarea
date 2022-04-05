export const listarUsuario= (datos, listarHTML)=>{
    datos.forEach(usuarios=>{
        const {nombre, apellido,correo,id}=usuarios

        listarHTML.innerHTML +=`
    
                            <th>${nombre}</th>
                            <th>${apellido}</th>
                            <th>${correo}</th>
                            <th>${id}</th>
                        </tr>
        `
    })
}