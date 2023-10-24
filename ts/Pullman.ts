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
console.log(myPullman.year) // undefined