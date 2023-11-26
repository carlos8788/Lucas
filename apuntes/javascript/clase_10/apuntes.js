const computadora = {
    modelo: 'intel i5',
    ram: '16gb',
    discoRigido: '1000gb',
    placaDeVideo: 'geForce GT 730'
}

function encenderComputadora(luz) {
    if(luz){
        console.log('encendida')
        return true
    }else{
        console.log('apagada');
        return false
    }
}

function cargarBios(compu){
    console.log(compu)
    console.log('Se cargó la BIOS con exito')
}

function principal(pc, luz) {
    let encendida = encenderComputadora(luz)
    if(encendida){
        cargarBios(pc)
    }else{
        console.log('No se pudo iniciar la PC')
    }
}

const encendido = document.querySelector('#on-off')

encendido.addEventListener('click', function(e){
    e.preventDefault()

    const valorDeEncendido = encendido.classList.toggle('encendida')
   
    principal(computadora, valorDeEncendido)

})

