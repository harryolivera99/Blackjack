
function saludar( nombre ) {
    console.log(arguments);
    console.log('Hola' + nombre );
}

const saludar2 = function (nombre ) {
    console.log( 'Hola' + nombre);
}

const saludarflecha = () => {
    console.log( 'Hola flecha');
}

const saludarflecha2 = ( nombre ) => {
    console.log( 'Hola' + nombre );
}


saludar( 'Fernando' , 40 , true , 'Costa Rica' );
// saludar2 ('Fernando');

saludarflecha();
saludarflecha2('Melissa')