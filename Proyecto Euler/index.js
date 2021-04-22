let a = 3;
let b = 5;
const respuesta = document.getElementById('respuesta');
const pregunta = document.getElementById('pregunta');

document.getElementById("p1").addEventListener("click", (e) => {

    limpiar();

    pregunta.innerHTML = `<h2>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
    The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.</h2>`
    respuesta.innerHTML = `
                            <div>
                            El resultado del primer ejercicio es:
                            </div>
                            <h1>${multiplos(a, b)}</h1>
                            `;
    
});

document.getElementById("p2").addEventListener("click", (e) => {

    limpiar();

    pregunta.innerHTML = `<h2>Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, 
    the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.</h2>`

    respuesta.innerHTML = `
    <div>
    El resultado del segundo ejercicio es:
    </div>
    <h1>${fibonacci()}</h1>
    `;

    
});

function multiplos(multiplo1, multiplo2) {
    let suma = 0;
    for (let i = 0; i < 1000; i++) {
      if (i % multiplo1 === 0 || i % multiplo2 === 0) {
        suma += i;
      }
    }
    return suma;
  }

function fibonacci(){
    let suma = 2;
    let anterior = 1, actual = 2, fib;
    
    while(actual < 4000000) {
       fib = anterior + actual;
       anterior = actual;
       actual = fib;
       if(fib%2===0) suma += fib;
    }

    return suma;

}

function limpiar(){
    respuesta.innerHTML = ``;
    pregunta.innerHTML = ``;
}