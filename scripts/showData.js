export const showData = async (arrayDatos, listarHTML ) => {
    arrayDatos.forEach(heroes => {
        const {nombre,imagen, historia}= heroes
        listarHTML.innerHTML +=`
               <div class="card" style="width: 18rem;">
        <img src=${imagen} class="card-img-top" alt="...">
        <div class="card-body">
            <h1>${nombre}</h1>
          <p class="card-text">${historia}</p>
        </div>
      </div>
        `
    })
}

