$(function() {
    $.getJSON(`https://rickandmortyapi.com/api/character/?page=1`, function(datosAPI) {
        let datosPersonajes = datosAPI.results;
        for(let cada_personaje of datosPersonajes){
            $(".contenidoAPI").append(`<div class = "tarjeta">

                <div class = "fotos">
                    <img class = "foto1" src="${cada_personaje.image}">
                </div>
                <div class = "datos">
                    <div class = "nombre">${cada_personaje.name}</div>
                    <div class = "especie">${cada_personaje.species}</div>
                    <div class = "genero">${cada_personaje.gender}</div>
                    <div class = "localizacion">${cada_personaje.location.name}</div>
                </div>

            </div>`)
        }
    })
});