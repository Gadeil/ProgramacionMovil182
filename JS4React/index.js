//console.log('hola')

//---funcion clasica---

//function suma(a,b){
//    return a+b;
//}


//---funcion fatArraow---
//const suma=(a,b)=>{
//    return a+b
//}


//---fat Arrow Function

//const suma= (a,b) => a+b

//console.log (suma(2,3)); 

/*const usuario = {
    nombre: 'ivan',
    apellido: 'guerra',
    edad: 36,
    direccion:{
        pais:'Mexico',
        cuidad:'qro',
        calle:'la misma'
    },
    amigos:['alex','carlos'],
    estatus: true, 
    enviaCorreo: enviaCorr=()=>'enviado'
}*/

// propiedades 
// console.log(usuario)
// console.log(usuario.direccion.calle)
// console.log(usuario.amigos)


// Metodos 
//console.log(usuario.enviaCorreo())



// Trabajo con DOM

/*const titulo = document.createElement('h1')
titulo.innerText= 'soy un titulo creado con 35'
document.body.append(titulo)

const boton= document.createElement('button')
button.innerText= 'presiona '
document.body.append(boton)

boton.addEventListener('cli',function(){
    //console.log('evento click ejecutando')
    titulo.innerText= 'evento click ejecutando'
    alert('exito')
}) */

/*const nombres= ['alan','isa','pablo']

for (let i= 0; i< nombres.length; i++){
    const elemento = nombres[i]
    console.log(elemetos)


}

nombres.forEach(funtion(nombre){
    console.log(nombre)

})*/

/*const array2= nombres.map(funtion(nombre){
    console.log(nombre)
    return nombre
})

console.log(nombres)
console.log(array2)*/


// Funcion find: ubicar elementos en el arreglo 

/* const resultado = nombres.find(function(nombre){
    if (nombre === 'pablo')
        return nombre
})

console.log(resultado) */

// Funcion concat

/*const edades = [78,89,12,8,10,15]
console.log(nombres.concat(edades))

// Spread Operator 
console.log([...nombres,...edades])*/

// Modulos : import & export 

/*import {suma,resta} from "./calculadora"
import * as calc from "./calculadora"

confirm.log(suma (45,54))
confirm.log(resta (45,5))

*/

// Ejemplo de promesa
/*
const ul = document.createElement('ul')

 fetch('https://jsonplaceholder.typicode.com/posts')
            .then (function (responde){
                console.log("carga de datos completa")
                return responde.json()
            }).then(function (data){
                console.log(data)  
                data.forEach(function(post){
                    const li = document.createElement('li')
                    li.innerHTML= post.title
                    ul.append(li)
                }) 
                document.body.append(ul)          
            })

console.log("cargando Html")
console.log("cargando CSS")
console.log("cargando Imagenes")

*/

//Ejemplo de Async Await 

/*
async function cargarDatos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos = await response.json()
    console.log(datos)
    datos.forEach(function(post){
        const li = document.createElement('li')
        li.innerHTML= post.title
        ul.append(li)
    }) 
    document.body.append(ul)  
}

cargarDatos()
console.log("cargando Html")
console.log("cargando CSS")
console.log("cargando Imagenes")
*/









