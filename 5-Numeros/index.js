// Crea un archivo JS que contenga las siguientes líneas

// Una variable que contenga tu altura en centímetros (entero)

const alturaCenti = 166

// Una variable que contenga tu altura en metros (número de coma flotante)

const alturaMetro = alturaCenti/100
console.log(alturaMetro)

// Una variable que contenga tu peso en kilogramos (número de coma flotante)

const pesoKilo = 65.43

// Una variable que contenga tu altura en metros redondeada hacia arriba

const redondeoAltura = alturaMetro.toFixed(1)
console.log(redondeoAltura)

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo

const redondeoPeso = Math.floor(pesoKilo)
console.log(redondeoPeso)

/* Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/

let maxValorJs = Number.MAX_VALUE;
console.log(maxValorJs===maxValorJs+1);

