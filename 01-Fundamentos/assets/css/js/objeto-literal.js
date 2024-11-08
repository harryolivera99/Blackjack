let personaje = {
    nombre : 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Harold', 'Olivera'],
    direccion: {
        zip: '1088, 90265' ,
        ubicacion: 'Havana'
    }
};

console.log( personaje );
console.log('nombre', personaje.nombre );
console.log('edad', personaje.edad );

const x = 'vivo';
console.log('vivo', personaje[x]);


// mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true

const entriesPares = Object.entries(personaje);
console.log(entriePares);

