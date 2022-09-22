// Javascript Vanilla (I)

// -----------------------------------------------------------------------------------------------------

// 1. Declara 2 variables numéricas (con el valor que desees), indica cual es mayor de
// los dos. Si son iguales indicalo también. Puedes ir cambiando los valores
// para comprobar que funciona.


//  let numero1 = 100;
//  let numero2 = 200;

//  if(numero1 > numero2){
//      console.log("Numero 1 es mayor");
//  } else if (numero1 == numero2){
//      console.log("Los numeros son iguales");
//  }else {
//      console.log("Numero 2 mayor que número uno");
//  };

// -----------------------------------------------------------------------------------------------------

// 2. Declara un String que contenga tu nombre, después muestra un mensaje de
// bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca
// “Bienvenido Fernando”.


// let nombre = prompt("Introduce tu nombre");

// if(nombre == "Paula"){
//   console.log("Bienvenida Paula");
// }else{
//   console.log("No eres Paula, no te saludo");
// };

// -----------------------------------------------------------------------------------------------------

// 3. Modifica la aplicación anterior, para que nos pida el nombre que queremos
// introducir (recuerda usar prompt).


// let nombre = prompt("Introduce tu nombre");
// if(nombre == "Paula"){
//   console.log("Bienvenida Paula");
// }else{
//   console.log("No eres Paula, no te saludo");
// };

// -----------------------------------------------------------------------------------------------------

// 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
// por teclado (recuerda pasar de String a double con parseDouble). Usa la
// constante PI.


// let radiusCircle = parseFloat(prompt("Dime el radio del circulo"));

// let circleArea = Math.PI * (radiusCircle**2);

// console.log(circleArea);

// -----------------------------------------------------------------------------------------------------

// 5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
// también debemos indicarlo.


// let numeroPar = parseInt(prompt("Dame un numero"));

//  if((numeroPar % 2) == 0){
//     console.log("Es divisible entre 2 (par)");
// }else{
//     console.log("No lo es")
// }

// -----------------------------------------------------------------------------------------------------

// 6. Lee un número por teclado que pida el precio de un producto (puede tener
//     decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
//     del 21%


//  let numeroBase = parseFloat(prompt("Dime un número por teclado"));

//  let resultadoIva = (numeroBase * 21) / 100;

//  console.log(resultadoIva);

// -----------------------------------------------------------------------------------------------------

// 7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.

//  let i = 1;

//  while(i <= 100){
//     console.log(i);

//   i++;
//  };

// -----------------------------------------------------------------------------------------------------

// 8. Haz el mismo ejercicio anterior con un bucle for.

// for(let i = 1; i <= 100; i++){

//     console.log(i);

// };

//  let i = 1;

//  while(i < 100){
//     if(((i % 2) == 0) && ((i % 3) == 0)){
//          console.log(i);
//     };

//  i++;
// };

// -----------------------------------------------------------------------------------------------------

// 9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
// el bucle que desees.

// for(let i = 1; i <= 100; i++){

//     console.log(i);

// };

//  let i = 1;

//  while(i < 100){
//     if(((i % 2) == 0) && ((i % 3) == 0)){
//          console.log(i);
//     };

//  i++;
// };

// -----------------------------------------------------------------------------------------------------

// 10. Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
// que no.

// let numeroVentas = parseInt(prompt("Dime cuantas cosas has vendido"));

// let ventasTotal = 0;

// for(let i = 1; i <= numeroVentas; i++){

//     ventasTotal += parseInt(prompt("Dime que vale el articulo"));

//     console.log("Hemos añadido ", i ,"ventas, y ahora el total de ventas es... ", ventasTotal);
// }


// -----------------------------------------------------------------------------------------------------

// 11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
// laboral o no. Usa un switch para ello.

// let diaSemana = prompt("Dime el día de la semana").toLowerCase();

// switch(diaSemana){
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":
//         console.log("Es laborable...a sufrir a Urbalab");
//     break;

//     case "sabado":
//     case "domingo":
//         console.log("A programar en casa");
//     break;

//     default:
//         console.log("Te has equivocado");
//     break;
//  };


// -----------------------------------------------------------------------------------------------------

// 12. Escribe una aplicación con un String que contenga una contraseña cualquiera.
// Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
// aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
// “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
// aunque le queden intentos).

//  let password = "meme";
//  let respuesta = "";

// for(let i = 3; i >=1; i--){
//     respuesta = prompt(`Dime el password, tienes ${i} intentos`);

//     if(respuesta == password){
//        console.log("Felicidades & Enhorabuena ...has acertado");
//         break;
//     };

// };


// -----------------------------------------------------------------------------------------------------

// 13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
// un signo aritmético (String), según este último se realizará la operación
// correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

// let primerNumero = parseInt(prompt("Soy el primer número"));

// let segundoNumero = parseInt(prompt("Soy el segundo número"));

// let operando = prompt("Dime la operación a realizar").toLowerCase();

// switch (operando) {
//     case "+":
//     case "sumar":
//         console.log(primerNumero + segundoNumero);
//         break;

//     case "-":
//     case "restar":
//         console.log(primerNumero - segundoNumero);

//         break;

//     case "*":
//     case "multiplicar":
//         console.log(primerNumero * segundoNumero);

//         break;

//     case "/":
//     case "dividir":
//         console.log(primerNumero / segundoNumero);

//         break;

//     case "%":
//     case "modulo":
//     case "resto":
//         console.log(primerNumero % segundoNumero);

//         break;

//     case "**":
//     case "elevar":
//         console.log(primerNumero ** segundoNumero);

//         break;

//     default:
//         console.log("Que demonios dices???");
//         break;
// }

// -----------------------------------------------------------------------------------------------------


