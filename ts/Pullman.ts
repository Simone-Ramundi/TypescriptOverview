/*
export class Pullman {
    year: number;
    constructor() {
        this.year = 10;
    }

    drive(speed: number){
        console.log(`Driving at ${speed}`);
    }
}

const myPullman = new Pullman();
console.log(myPullman.year) // undefined */


/* COMBINATION INTERFACES AND CLASSES */
interface Driveable {
    speed: number;
    drive(): string;
}

class Pullman implements Driveable {
        speed = 10;
    drive(){
        return `I am driving at ${this.speed}`
    }
}
/* creating a new instance of Pullman */
const myPullman = new Pullman();
const startDriving = (vehicle:Driveable) => {
    vehicle.drive();
};

startDriving(myPullman);