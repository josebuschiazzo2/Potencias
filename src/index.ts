/*Ejercicio – Par/Impar B
•Realizar un algoritmo que dado un número entero ingresado por el usuario, visualice en pantalla si es par o impar
En el caso de ingresar un cero, se debe volver a pedir el número por teclado (hasta que se ingrese un número mayor que cero)*/

let greater_zero:boolean=true;

console.clear();
while (greater_zero){
  let num : number = Number (prompt("Ingrese el numero a evaluar"));
  // pregunto primero si introdujo números, entero y si es mayor a 0, sino vuelvo a pedirlo
  if (isNaN(num) || (num%1) || (num===0)){
    alert("Solos se adminte un número entero y Mayor a Cero (0)");
    } else {
        greater_zero=false;
        if (num%2===0) { 
          console.log ("Su número es Par");
          } else {
         console.log ("Su número es impar");
              }
        }
  }
