//Armando nuestra galería de imágenes  - Haciendo uso de la API de 
// https://pixabay.com/es/

//Cómo capturamos los datos que vienen desde el formulario
let busqueda = new URLSearchParams(location.search);
let buscar = busqueda.get('buscar'); 


let galeria = document.querySelector('.galeria');
fetch(`https://pixabay.com/api/?key=21719173-f62a37d59a040ade40aa59656&image_type=photo&category=${buscar}`)
.then(fotos =>{
    return fotos.json()
})
.then(dataFotos =>{
    //console.log(dataFotos.hits);
    //Para discponer de manera aletoria una imagen de fondo en el HOME
    let imagenFondo = document.querySelector('.imagenFondo');
    imagenFondo.innerHTML = `<img src ="${dataFotos.hits[0].largeImageURL}" alt = "Foto Fondo" > `

    for(let i = 0; i < dataFotos.hits.length; i++){
        //if(dataFotos.hits[i].imageHeight === 4000){
            galeria.innerHTML += `<article class='imagenes'> <a href="detalle.html?id=${dataFotos.hits[i].id}" > <img src ="${dataFotos.hits[i].largeImageURL}" alt = "Foto" > </a> </article>`
        //}
    } 
})
.catch(error => console.log(error))









