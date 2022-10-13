/*---Crea un archivo JS que contenga las siguientes líneas---*/

// Una variable que contenga la lista de la compra (mínimo 5 elementos)

let lista = ["Arroz","Papas","Tomate","Lechuga","Huevos"]
console.log(lista)

// Modifica la lista de la compra y añádele "Aceite de Girasol"

lista.push("Aceite de Girasol")
console.log(lista)

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

lista.pop()
console.log(lista)

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

let peliculas = [
    {
        titulo:"Matrix",
        director:"Hermanes Wachoski",
        fecha:"December,18,1999"
    },
    {
        titulo:"La Belle Verte",
        director:"Coline Serreau",
        fecha:"April,15,1996"
    },
    {
        titulo:"El libro de la Vida",
        director:"Jorge Gutierrez",
        fecha:"October,17, 2014"
    }
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

let fechaX = new Date(2010,0,1)
console.log(fechaX)

let peliculasPosteriores = peliculas.filter(peli=>fechaX < new Date(peli.fecha))
console.log(peliculasPosteriores)


// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

let directores = peliculas.map((pelicula,i)=>peliculas[i].director)
console.log(directores)


// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)


let titulos = peliculas.map((pelicula,i)=>peliculas[i].titulo)
console.log(titulos)


// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)


let mezcla = directores.concat(titulos)
console.log(mezcla)


/* Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/


let mezclaFactor = [...directores,...titulos]
console.log(mezclaFactor)
