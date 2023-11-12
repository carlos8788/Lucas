const contenedor = document.querySelector('#contenedor');
const contFormulario = document.querySelector('.contenedor-formulario');

const datosPrimitivos = document.createElement('h2')

datosPrimitivos.textContent = 'Un dato primitivo es un string'

// contenedor.append(datosPrimitivos) // hijo del padre que se usa de referencia
contFormulario.before(datosPrimitivos)

const estructuraDeDatos = document.createElement('h2')

estructuraDeDatos.textContent = 'Una estructura de datos es un array'

datosPrimitivos.after(estructuraDeDatos) // despues de la referencia

const funciones = document.createElement('h2')

funciones.textContent = 'Una función es un bloque de codigo reutilizable'

datosPrimitivos.before(funciones) // antes de la referencia

