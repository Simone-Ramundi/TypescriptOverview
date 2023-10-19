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