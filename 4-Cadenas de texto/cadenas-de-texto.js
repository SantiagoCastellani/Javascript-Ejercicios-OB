// Crea un archivo JS que contenga las siguientes líneas 

// Una cadena de texto con tu Nombre

const nombre = "Santiago"

// Otra cadena de texto con tu Apellido

const apellido = "Castellani"

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

const estudiante = nombre + " " + apellido
console.log(estudiante)

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

const estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

const estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

const caracteres = estudiante.length
console.log(caracteres)

// Una variable que contenga la primera letra del Nombre

const primeraLetra = nombre[0]
console.log(primeraLetra)

// Otra variable que contenga la última letra del Apellido

const tamañoApellido = apellido.length
console.log(tamañoApellido)

const ultimaLetra = apellido[tamañoApellido-1]
console.log(ultimaLetra)

// Una cadena de texto que elimine los espacios de la variable "estudiante"

const sinEspacio = estudiante.replace(/ /g,"")
console.log(sinEspacio)

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

var contieneNombre = estudiante.includes(nombre)
console.log(contieneNombre) 