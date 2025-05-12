function tituloEjercicio(numero) {
  console.log(`\n\nEjercicio ${numero}\n`);
}
//Ejercicio 1
// console.log("Ejercicio 1");
tituloEjercicio(1);
let edad = 15;

function mayorEdad(edad) {
  if (edad >= 18) {
    console.log(`Es mayor de edad`);
  } else {
    console.log(`Es menor de edad`);
  }
}

mayorEdad(edad);

//Ejercicio 2
// console.log("Ejercicio 2");
tituloEjercicio(2);
let alumno = {
  nombre: "Cesar",
  carnet: "CR18076",
  notaE: 8,
  tareas: 8,
  asistencia: 10,
  investigacion: 8,
};
function calculoNota(alumno) {
  let notaFinal =
    alumno.notaE * 0.2 +
    alumno.tareas * 0.4 +
    alumno.asistencia * 0.1 +
    alumno.investigacion * 0.3;
  console.log(
    `El alumno ${alumno.nombre} con el carnet de ${alumno.carnet} tiene la nota de:${notaFinal}`
  );
}
calculoNota(alumno);

// Ejercicio 3
// console.log("Ejercicio 3");
tituloEjercicio(3);
let empleado = {
  nombreE: "Pepito",
  salario: 500,
  categoria: "C",
};

function calculoAumento(empleado) {
  let calculoA = 0;
  switch (empleado.categoria) {
    case "A":
      calculoA = empleado.salario * 0.15;
      break;
    case "B":
      calculoA = empleado.salario * 0.3;
      break;
    case "C":
      calculoA = empleado.salario * 0.1;
      break;
    case "D":
      calculoA = empleado.salario * 0.15;
      break;
  }
  console.log(
    `El empleado ${empleado.nombreE} de categoria ${empleado.categoria} cuyo salario es de ${empleado.salario} tendra el aumento de ${calculoA}`
  );
  console.log(`tendra un salario total de: $${empleado.salario + calculoA}`);
}
calculoAumento(empleado);

//ejercico 4
tituloEjercicio(4);
let numero1 = 4;
let numero2 = 5;
function comparadorNumero(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(`El numero ${numero1} es mayor a ${numero2}`);
  } else if (numero1 == numero2) {
    console.log(`Ambos numeros son iguales`);
  } else {
    console.log(`El numero ${numero1} es menor a ${numero2}`);
  }
}
comparadorNumero(numero1, numero2);

//Ejercicio 5
tituloEjercicio(5);

let carrito = "FORD ESCAPE";

function aplicarDescuento(carrito) {
  let desc = 0;
  switch (carrito) {
    case "FORD FIESTA":
      desc = 5;
      break;
    case "FORD FOCUS":
      desc = 10;
      break;
    case "FORD ESCAPE":
      desc = 20;
      break;
  }

  console.log(
    `Como el auto seleccionado es ${carrito} el descuento que se le aplicara sera del %${desc}`
  );
}
aplicarDescuento(carrito);

//Ejercicio 6
tituloEjercicio(6);

let destino = "La costa del Sol";

function aplicarDescuento(destino) {
  let desc = 0;
  switch (destino) {
    case "La costa del ol":
      desc = 5;
      break;
    case "Panchimalco":
      desc = 10;
      break;
    case "Puerto el Triunfo":
      desc = 20;
      break;
  }

  console.log(
    `Como el destino es ${destino} el descuento que se le aplicara sera del %${desc}`
  );
}
aplicarDescuento(destino);

//Ejercicio 7
tituloEjercicio(7);

let numeros = [5, 4, -10, 30, 45, -50, 25, 100, 95, 80];

function identificador(numeros) {
  let pos = 0;
  let neg = 0;
  let mult15 = 0;
  let acum = 0;
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] < 0) {
      neg += 1;
    }
    if (numeros[index] > 0) {
      pos += 1;
    }
    if (numeros[index] % 15 == 0) {
      mult15 += 1;
    }
    if (numeros[index] % 2 == 0) {
      acum += numeros[index];
    }
  }
  console.log(
    `cantidad de numeros negativos: ${neg}\n
    cantidad de numeros positivos: ${pos}\n
    cantidad de numeros multiplos de 15: ${mult15}\n
    cantidad acumulada de numeros pares: ${acum}`
  );
}
identificador(numeros);
//Ejercicio 8
tituloEjercicio(8);
let numMult = 5;

function multiplicacion(num) {
  console.log("Multiplicacion de" + num);
  for (let i = 0; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}
multiplicacion(numMult);

//Ejercicio 9
tituloEjercicio(9);

let celsius = 20;

function conversionF(celsius) {
  let F = (celsius * 9) / 5 + 32;
  return F;
}

let faren = conversionF(celsius);
console.log(`Temperatura en F: ${faren}`);

function evaluarTemp(F) {
  if (F >= 14 && F <= 32) {
    console.log("Temperatura baja");
  } else if (F > 32 && F <= 68) {
    console.log("Temperatura adecuada");
  } else if (F > 68 && F <= 96) {
    console.log("Temperatura alta");
  } else {
    console.log("Temperatura desconocida");
  }
}
evaluarTemp(faren);

//Ejercicio 10
tituloEjercicio(10);

let maniana = [8, 9, 8, 10, 9];
let tarde = [8, 9, 10, 10, 10, 10];
let noche = [8, 9, 8, 10, 9, 9, 9, 9, 8, 10, 9];
let manianaPro = 0;
let tardePro = 0;
let nochePro = 0;

function calcularProm(turno) {
  let turnoProm = 0;
  for (let i = 0; i < turno.length; i++) {
    turnoProm += turno[i];
  }
  turnoProm /= turno.length;
  //   console.log(`Edad promedio de la mañana ${turnoProm.toFixed(2)}`)

  return turnoProm.toFixed(2);
}
manianaPro = calcularProm(maniana);
tardePro = calcularProm(tarde);
nochePro = calcularProm(noche);

console.log(`Edades promedios de cada turno:\n
Mañana:${manianaPro}
Tarde: ${tardePro}
Noche:${nochePro}`);

calcularMayor(manianaPro, tardePro, nochePro);

function calcularMayor(manianaProm, tardeProm, nocheProm) {
  let mayor = 0;
  let nombre = "";
  if (manianaPro > mayor) {
    mayor = manianaProm;
    nombre = "Mañana";
  }
  if (tardeProm > mayor) {
    mayor = tardeProm;
    nombre = "Tarde";
  }
  if (nocheProm > mayor) {
    mayor = nocheProm;
    nombre = "Noche";
  }
  console.log(`El turno de la ${nombre} tiene el mayor promedio`);
}
