const altura_cm = 172;
const altura_m = 1.72;
const peso_kg = 92.1;

const alturaArriba = Math.ceil(altura_m);
const pesoAbajo = Math.floor(peso_kg);

const igualdad = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log("Una variable que contenga tu altura en centímetros: " + altura_cm + "\n")

console.log("Una variable que contenga tu altura en metros: " + altura_m + "\n")

console.log("Una variable que contenga tu peso en kilogramos: " + peso_kg + "\n")

console.log("Una variable que contenga tu altura en metros redondeada hacia arriba: " + alturaArriba + "\n")

console.log("Una variable que contenga tu peso en kilogramos redondeado hacia abajo: " + pesoAbajo + "\n")

console.log('Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript:  '+ igualdad  + "\n")