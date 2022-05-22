/*Potencias:
Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. */

let greater_zero: boolean = true; // Lo uso para evaluar si es mayor a cero
let total :number=1;


console.clear();

//Bucle para obligarlo a que me ponga un número mayor o igual a 0
while (greater_zero)
{
 let base: number = Number(prompt("Ingrese la Base (solo números enteros mayor igual a 0) "));
 // pregunto primero si introdujo números, entero y si es mayor a 0, sino vuelvo a pedirlo
 let exponent: number = Number(prompt("Ingrese el Exponente (solo números enteros mayor igual a 0) "));
  if (isNaN(base) || isNaN(exponent) || base % 1 || exponent % 1 || base < 0 || exponent < 0) 
  {
      alert("Solos se adminten un números enteros y Mayor-Igual a Cero (0)");
  } else {
        greater_zero = false;
        } // Salgo del bucle y hago la operación
}

for (let i:number=0;i<exponent;i++) // si el exponente es igual a 0, la variable total queda en "1" porque no entra
{
  total*=base;
}

console.log ("El resultado de " + base + " elevado a la " + exponent + " es igual a " + total);
