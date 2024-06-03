// personaje de tv

let nombre = "sasuke";
let anume = "naruto";
let edad = 16;  

let personaje = {
    nombre: "sasuke",
    anime: "naruto", 
    edad: 16,
};                      // <-- objeto literal 

console.log(personaje);
console.log(personaje.nombre);
console.log(persinaje ['amime']);

personaje.edad = 13;

let llave = 'edad';
personaje ['edad'] = 16;

delete personaje.anime;

console.log(personaje);
