let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');

let idImagen = document.querySelector('#idImagen');
idImagen.innerHTML = `El id de la imagen seleccionada es ${id}` 

let imagenDetalle = document.querySelector('.imagenDetalle')



fetch(`https://pixabay.com/api/?key=21719173-f62a37d59a040ade40aa59656&image_type=photo&id=${id}`)
.then(foto =>{
    return foto.json()
})
.then(imagen =>{
    console.log(imagen);
    imagenDetalle.innerHTML = `<h2 >${imagen.hits[0].tags} </h2> <img src="${imagen.hits[0].largeImageURL}"  alt="${imagen.hits[0].tags}"  >  `
})
.catch(error => console.log(error));



//Trabjando con el localStorage
//1.- Capturar el elemento
let agregarQuitar = document.getElementById('agregarQuitar');

//2.- Crear un array
let misFotos = [];

//3.- Traer los datos del localStorage
let traerFotos = localStorage.getItem('fotosFavoritas');

//console.log(traerFotos);
if(traerFotos != null){
    misFotos = JSON.parse(traerFotos);   
}

//4.- Verificar si el ( id ) esta o no en el array - Condición
if(misFotos.includes(id)){
    agregarQuitar.innerHTML = 'Quitar de favoritos';      
}

//5.- Controlar el evento sobre el elemento capturado
agregarQuitar.addEventListener('click', function(e){
    e.preventDefault();
    //Debo programar agregar el id al array de favortitos para finalmente colocarlo dentro del localStorage
    if(misFotos.includes(id)){
        let posicionFoto = misFotos.indexOf(id);
        misFotos.splice(posicionFoto,1);
        agregarQuitar.innerHTML = 'Agregar a Favoritos';
    }else{
        misFotos.push(id);
        agregarQuitar.innerHTML = 'Quitar de Favoritos'
    }
    //cargar los datos al localStorage
    let cadenaTextoFoto = JSON.stringify(misFotos);
    localStorage.setItem('fotosFavoritas',cadenaTextoFoto)
    console.log(localStorage);
})



