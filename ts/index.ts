console.log('Hi there!');

/* CONST DEFINES A STRING */
const myName: string = "Simone";

/* .include METHOD */
const sentence = 'This is a sentence';
sentence.includes('is');

/* TS with Functions */
const add = (a:number, b:number):number =>{
    return a + b;
}

/* INTRODUCING INTERFECES */

const post = {
    title: 'The Sky',
    daysOld: 10,
    published: true,
}
interface PostGatekeeper {
    title: string;
    daysOld: number;
    published: boolean;
}

const printPrint = (postToPrint: PostGatekeeper) => {
    return  `${postToPrint.title} (${postToPrint.daysOld} days old`
}

/* Classes and Properties */

class Car {
    /* EVERY CAR SHOULD HAVE COLOR AND YEAR: */
    /* PROPERTIES :*/
    color: string;
    year: number;
     /* CONSTRUCTOR FX: */
    constructor( color: string, year: number ) {
        /* QUI VENGONO INIZIALIZZATE */
        this.color = color;
        this.year = year;
    }
    drive() {
        console.log('Vroom')
    }
}
/* COMMAND TO CREATE AN INSTACE OF CAR*/
const myCar = new Car('red', 2000);
/* COMMAND TO CALL A METHOD */
myCar.drive();
/* CONSOLE LOG OF THE NEW PROPERTIES: */
console.log(myCar.color, myCar.year); // 'red' ,2000