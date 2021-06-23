//capturar el elemento
let busqueda = document.querySelector('.busqueda');
let palabraABuscar = location.search;
let objetoBuscar = new URLSearchParams(palabraABuscar);

//let nombre = objetoBuscar.get('nombre');
//let apellido = objetoBuscar.get('apellido');

//console.log(objetoBuscar.get('buscar')); 
busqueda.innerHTML = objetoBuscar.get('buscar')
busqueda.classList.add('destacado');

//busqueda.innerHTML = `Mi nombre es ${nombre} ${apellido}`

let enlace = document.querySelector('.enlace');
enlace.innerHTML = `<a class='enlaceRef' href='buscar.html?buscar=${objetoBuscar.get('buscar')}'> Llamar a la página de buscar...</a>`

enlace.addEventListener('click', function(){
    alert('Todo esto debemos practicarlo');
})






