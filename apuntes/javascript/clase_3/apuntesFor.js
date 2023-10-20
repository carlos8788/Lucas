console.log('Tercer clase')
console.log('**************************')


// 2 maneras de iterar de uno en uno
// for (let i = 0; i < 10; i = i + 1 ){
//     console.log(i)
// }

// for (let i = 0; i < 10; i ){
//     console.log(i)
// }




// tabla de numeros usando for

// let tabla = Number(prompt('Ingrese un número del 1 al 10'))

// console.log(tabla)

const tabla = 0

// if (tabla <= 10 && tabla > 0) {
if (tabla > 0 && tabla <= 10) {

    // aca va el bloque de codigo

    console.log('------------------------------')
    console.log(`Esta es la tabla del ${tabla}`)
    console.log('------------------------------')

    for (let i = 0; i <= (10 * tabla); i += tabla) {
        //        ; 2 <= 10 * 2      ; 2 += 2
        //        ; 4 <= 10 * 2      ; 4 += 2
        //        ; 6 <= 10 * 2      ; 6 += 2
        //        ; 8 <= 10 * 2      ; 8 += 2
        //        ; 10 <= 10 * 2     ; 10 += 2
        //        ; 12 <= 10 * 2     ; 12 += 2
        //        ; 14 <= 10 * 2     ; 14 += 2
        //        ; 16 <= 10 * 2     ; 16 += 2
        //        ; 18 <= 10 * 2     ; 18 += 2
        //        ; 20 <= 10 * 2     ; 20 += 2
        //        ; 22 <= 10 * 2     FIN

        // for (let i = 0; i < 10; i++ ){
        if (i === 0) {
            console.log('Todo numero multiplicado por 0 es 0')
            console.log('------------------------------')

        } else {

            // console.log(`El valor de i es: ${i}`)
            console.log(`'<li>nombre: ${i} </li>'`)
        }
    }
} else {
    console.log('Pusiste cualquier verdura')
}




// for (let i = 0; i < 4; i++) {
//     if(i === 0) {
//         const alumno1 = 'luis'
//         console.log(alumno1)
//     }
//     if(i === 1) {
//         const alumno2 = 'lucas'        
//         console.log(alumno2)
//     }
//     if(i === 2) {
//         const alumno3 = 'carlos'
//         console.log(alumno3)
//     }
//     if(i === 3) {
//         const alumno4 = 'fernando'
//         console.log(alumno4)
//     }
// }

// este for se interrumpe en 2
// for (let i = 0; i < 4; i++) {
//     console.log(i)
//     if(i === 2){
//         break
//     }
// }

// este for se salte el 2
for (let i = 0; i < 4; i++) {
    if(i === 2){
        continue
    }
    console.log(i)
}

