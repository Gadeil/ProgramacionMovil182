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

const titulo = document.createElement('h1')
titulo.innerText= 'soy un titulo creado con 35'
document.body.append(titulo)

const boton= document.createElement('button')
button.innerText= 'presiona '
document.body.append(boton)

boton.addEventListener('cli',function(){
    //console.log('evento click ejecutando')
    titulo.innerText= 'evento click ejecutando'
    alert('exito')
})