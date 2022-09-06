/*Implemente un algoritmo que calcule y muestrepor pantalla el precio final de un producto
después de aplicarle un descuento
• El precio inicial del producto es $450,50
• El descuento a aplicar es del 10%. Recuerde que puede obtener el 10% de un valor multiplicado por 0,1
• El precio y el descuento deben ser guardados en variables (no ingresados por teclado)*/

let readlineSync = require('readline-sync');
let cantidad = readlineSync.questionInt('Ingrese la cantidad: ');
let precio = readlineSync.questionInt('Ingrese el precio: ');
let descuento = 0.10;
let montoMinimo = 1000;
let total = cantidad*precio;

console.log("Su compra total fue de $" + total);
if (total > montoMinimo) {
    total = total * (1 - descuento);
    console.log("Como supera los $" + montoMinimo + ", obtiene un descuento del " + 
descuento*100 + "%.\nEl precio final es de $" + total);
}

//Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres
let readlineSync = require('readline-sync');
let nro1 = readlineSync.questionFloat('Ingrese el 1er numero: ');
let nro2 = readlineSync.questionFloat('Ingrese el 2do numero: ');
let nro3 = readlineSync.questionFloat('Ingrese el 3er numero: ');

let mayor = nro1;

if (nro2 > mayor) {
    mayor = nro2;
}
if (nro3 > mayor) {
    mayor = nro3;
}

console.log("El numero mas grande ingresado es: " + mayor);