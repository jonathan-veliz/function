console.log("Ejercicio 1 \npar o impar?");

/*Ejercicio 1: Verificar si un número es par o impar
Escribe una función llamada esPar(numero) que tome un número como argumento y determine si es par o impar.La función debe devolver "Par" si el número es par y "Impar" si el número es impar.
*/
 function esPar(numero){
    if(numero %2 === 0){
        console.log("El " +numero + " es par.");
    }else{
        console.log("El " + numero + " es impar.");
    }
 }
esPar(8);
esPar(7);
console.log("Ejercicio 2 \n suma de digitos \n ej: 15=1+5 y 152=1+5+2.");

/*
    Ejercicio 2: Suma de los dígitos de un número
Escribe una función llamada sumaDigitos(numero) que tome un número entero positivo como argumento y calcule la suma de sus dígitos.Por ejemplo, si el número es 123, la función debe devolver 6(1 + 2 + 3).
*/


function sumaDigitos(numero){
    let suma=0;
   while(numero){
    suma=suma+numero%10;
    numero= Math.floor(numero/10);

   }
   return suma;

}
console.log(sumaDigitos(15));
console.log(sumaDigitos(152));

console.log("Ejercicio 3 \n secuencia separado por coma y punto final. \n Ejemplos 5 y 15." );
/*

    Ejercicio 3: Generar una secuencia
Escribe una función llamada generarSecuencia(numero) que tome un número como argumento e imprima una secuencia ascendente desde 1 hasta el número dado.Por ejemplo, si el número es 5, la función debe imprimir: 1, 2, 3, 4, 5.
*/

function generarSecuencia(numero){
   
    let s = "";
    for (let i = 1; i <= numero;i++){
        s=s+i;
        if(i < numero){
            s=s+",";
        }else {
            s=s+".";
        }
       
    }
    return s;
}
console.log(generarSecuencia(5));
console.log(generarSecuencia(15));

console.log("Ejercicio 4 \n tabla de multiplicar \n Ejemplo la del 5.");
/*
Ejercicio 4: Tabla de multiplicar
Escribe una función llamada tablaMultiplicar(numero) que tome un número como argumento e imprima la tabla de multiplicar de ese número desde 1 hasta 10. Por ejemplo, si el número es 7, la función debe imprimir:

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
*/

function tablaMultiplicar(numero){
    let r = "";
    for(i = 1 ;i <= 10;i++){
         r = (numero * i);
        console.log(numero + " x "+i+" = "+ r);
}
 
}
tablaMultiplicar(5);


console.log("Ejercicio 5 \n Si es primo o no ? con boolean \n Ejemplos 6 y 7" ) ;
/*
Ejercicio 5: Números primos
Escribe una función llamada esPrimo(numero) que tome un número como argumento y determine si es un número primo.La función debe devolver true si el número es primo y false si no lo es.Recuerda que un número primo es aquel que solo es divisible por 1 y por sí mismo.
*/
function esPrimo(numero){
    if(numero === 1){
        return false;
    }
        for (let i = 2; i <=numero; i++) {
            if (numero % i == 0) {
                return false;
    }
    return true;
}
}
console.log(esPrimo(6));
console.log(esPrimo(7));


console.log("Subiendo dificultad");
 
console.log("Ejercicio 1 \n ejemplo numeros 28 y 5  ")
/*
Ejercicio 1: Números perfectos
Escribe una función llamada esNumeroPerfecto(numero) que tome un número como argumento y determine si es un número perfecto. Un número perfecto es aquel cuya suma de sus divisores (excluyendo al propio número) es igual al número original. Por ejemplo, el número 28 es perfecto porque 1 + 2 + 4 + 7 + 14 = 28. */

  function esNumeroPerfecto(numero){
    if(numero <= 0){
        return false;
    }
    let suma=0;
    for(let i=1 ;i < numero; i++){
        if(numero % i === 0){
        suma=suma+i;

    }
  }
  return suma ===numero;
}
console.log(esNumeroPerfecto(28));
console.log(esNumeroPerfecto(5));
  
  

console.log("Ejercicio 3\n ejemplo numero 5");
/*Ejercicio 3: Cálculo del factorial
Escribe una función llamada calcularFactorial(numero) que tome un número entero positivo como argumento y calcule su factorial. El factorial de un número se calcula multiplicando todos los números enteros positivos desde 1 hasta el número dado. Por ejemplo, el factorial de 5 (representado como 5!) es igual a 5 x 4 x 3 x 2 x 1 = 120. */

function calcularFactorial(numero) {
    if (numero === 0 || numero ===1) {
        return 1;
    }else{
        return numero * calcularFactorial(numero-1);
    }
}
console.log(calcularFactorial(5));


