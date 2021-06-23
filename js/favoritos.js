//Pasos para mostrar la lista de mis fotos favoritas


//1.-Traer los datos del localStorage (localStorage.getItem())
let misFavoritos = localStorage.getItem('fotosFavoritas'); 

//2.- Transformar en un array
let arrayFavoritos = JSON.parse(misFavoritos);

//3.- Capturar el elemento <ul class=listaFotos> donde se pretende mostrar las mismas

let listaFotos = document.querySelector('#listaFotos');
listaFotos.classList.add('listaFotos');
//4.- Determinar si hay o no alguna foto en favoritas - if(arrayFavoritas === null)


if( arrayFavoritos.length === 0){
//5.- Si no hay fotos Mostrar el mensaje al usuario '</li>Noy hay fotos favoritas </li>'
    listaFotos.innerHTML = `<li>No hay fotosen favoritos </li>`
    alert('No hay fotos en favoritos')
}else{
//6.- Caso contrario - Recorrer el array - for(let i = 0; i < arrayFavoritas.length; i++)
    for(let i = 0; i < arrayFavoritos.length; i++){
    //7.- Dentro del ciclo hacer un lista de cada elemento del array y mostrarlo en el html con inneHTML += Les puedo recomendar crear una función que haga ese trabajo.
        /*
        fetch(`https://pixabay.com/api/?key=21719173-f62a37d59a040ade40aa59656&image_type=photo&id=${arrayFavoritos[i]}&per_page=100`)
        .then(respuesta =>{
            return respuesta.json()
        })    
        .then(foto =>{
            listaFotos.innerHTML += `<li><img src='${foto.hits[0].largeImageURL}' alt = 'foto'></li>`
        })
        .catch(error =>console.log(error))
        */
        //Ahora voy a crear una función
        listadoFavoritos(arrayFavoritos[i]);
    }
}


//8.- La función se encargía de ejecutar el fetch contemplando el id de cada uno de las fotos que estan en el array de misFavortitas

function listadoFavoritos(id){
    fetch(`https://pixabay.com/api/?key=21719173-f62a37d59a040ade40aa59656&image_type=photo&id=${id}&per_page=100`)
        .then(respuesta =>{
            return respuesta.json()
        })    
        .then(foto =>{
            listaFotos.innerHTML += `<li><img src='${foto.hits[0].largeImageURL}' alt = 'foto'></li>`
        })
        .catch(error =>console.log(error))
}








