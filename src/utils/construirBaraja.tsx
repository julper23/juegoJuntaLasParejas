
import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeAsomeClasees';
const NUMERO_DE_CARTAS = 20;


export default () => {
    const fontAwesomeClasses = FontAwesomeClasses();
    let cartas = [];

    while (cartas.length < NUMERO_DE_CARTAS) {
        const index = Math.floor(Math.random() * fontAwesomeClasses.length)
        const carta = {
            icono: fontAwesomeClasses.splice(index,1)[0],
            adivinada:false,
            comparando:false
        }
        cartas.push(carta)
        cartas.push({...carta})
    }
    return shuffle(cartas);
}

//En un futuro esto sera un hook