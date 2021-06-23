//Trabajando con funciones
function sumar(valor1,valor2){
    return valor1 + valor2;
}


console.log(sumar(2,2));
console.log(sumar(29,200));
console.log(sumar(200,200));

let valores = document.querySelector('.valores');
valores.style.color ='red'; 
valores.style.textAlign = 'center';
valores.innerHTML += `<ul>
                        <li >Listado de los valores calculados </li>
                        <li> ${sumar(20,20)}  </li>
                        <li> ${sumar(400,500)} </li>
                        <li> ${sumar(550,550)} </li>
                        <li> ${sumar(2,5)} </li>
                    </ul>`