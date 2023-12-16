const personajesSimpsons = [
    {
        nombre: "Homero",
        relacion: "Padre",
        edad: 39,
        trabajo: "Inspector de seguridad en la Planta Nuclear",
        caracteristicas: ["Perezoso", "Glutón", "Cariñoso"]
    },
    {
        nombre: "Marge",
        relacion: "Madre",
        edad: 36,
        trabajo: "Ama de casa",
        caracteristicas: ["Paciente", "Comprensiva", "Amorosa"]
    },
    {
        nombre: "Bart",
        relacion: "Hijo",
        edad: 10,
        trabajo: "Estudiante",
        caracteristicas: ["Travieso", "Aventurero", "Rebelde"]
    },
    {
        nombre: "Lisa",
        relacion: "Hija",
        edad: 8,
        trabajo: "Estudiante",
        caracteristicas: ["Inteligente", "Sensible", "Talentosa en música"]
    },
    {
        nombre: "Maggie",
        relacion: "Hija",
        edad: 1,
        trabajo: "Bebé",
        caracteristicas: ["Silenciosa", "Observadora"]
    },
    {
        nombre: "Abraham",
        relacion: "Abuelo",
        edad: 83,
        trabajo: "Jubilado",
        caracteristicas: ["Anciano", "Narrador de historias", "Olvidadizo"]
    }
];

console.log(personajesSimpsons[0].nombre);

personajesSimpsons.forEach(function (personaje) {
    console.log(personaje.caracteristicas[0])
})


const resultado = personajesSimpsons.find(function (personaje) {
    return personaje.nombre === "Abraham"
})
console.log(resultado);

const personajesMenoresDe18 = personajesSimpsons.filter(function(personaje) {
    return personaje.edad < 18;
});

console.log(personajesMenoresDe18);


// const personajesMenoresDe18 = [];

// personajesSimpsons.forEach(function(personaje) {
//     if (personaje.edad < 18) {
//         personajesMenoresDe18.push(personaje);
//     }
// });

// console.log(personajesMenoresDe18);