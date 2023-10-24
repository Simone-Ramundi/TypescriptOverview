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
    public color: string;
    private year: number;
     /* CONSTRUCTOR FX: */
    constructor( color: string, year: number ) {
        /* QUI VENGONO INIZIALIZZATE */
        this.color = color;
        this.year = year;
    }
    public drive() {
        console.log(this.year)
        console.log('Vroom')
        this.putInGear();
        this.pressPedal();
        this.turnWheel()
    }
    /* Defines other methods private as we do not want other developer to change the process of driving: */
    private putInGear() {

    }
    private pressPedal(){

    }
    private turnWheel(){

    }
}
/* COMMAND TO CREATE AN INSTACE OF CAR*/
const myCar = new Car('red', 2000);
/* COMMAND TO CALL A METHOD */
myCar.drive();
/* CONSOLE LOG OF THE NEW PROPERTIES: */
console.log(myCar.color, myCar.year); // 'red' ,2000

/* Public and Private */
myCar.color;
myCar.year; // Property private only method can access year property
myCar.drive();
myCar.putInGear(); // Property no readable

/* DECORATORS */

const Component = (target: any) => {
    console.log(target);
};
@Component
class Moto {
    @Component year: string;
    @Component
    drive(@Component speed: number){

    }
}
// Component does not get called a second time
new Moto();

/* MODULE SYSTEM */
import {Pullman} from "./Pullman";

const myPullman1 = new Pullman();

/* CLASS GENERICS: the goal is to reduce the number of times you have to write out a unique implementation */

class NumberHolder {
    value: number;
}
class StringHolder {
    value: string;
}
class BooleanHolder {
    value: boolean;
}

/* this is = to write each class */
class ValueHolder<TypeForValueProperty> {
    value: TypeForValueProperty;
}
/* shortcut */
class ValueHolderNew<T>{
    value: T;
}

const numberHolder = new NumberHolder();
numberHolder.value = 10;

const stringHolder = new StringHolder();
stringHolder.value = 'A String'

const numberHolder = new ValueHolder<number>();
numberHolder.value;