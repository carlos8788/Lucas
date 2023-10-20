// let variable = prompt('Ingrese "verde" para salir')

// while(variable !== "verde"){
//     alert('No ingresó la palabra correcta')
//     console.error('No ingresó la palabra correcta')
//     variable = prompt('Ingrese "verde" para salir')
// }

// console.log('Bien hecho')


let contrasenia = prompt('Ingrese su contraseña')
let intentos = 3
while(contrasenia !== 'patoverde'){

    console.log('error de contraseña')
    intentos--
    if(intentos === 0){
        console.log('BLOQUEADO FOR EVER')
        break
    }else{
        contrasenia = prompt(`Ingrese su contraseña, le quedan ${intentos} intentos`)
    }
}

