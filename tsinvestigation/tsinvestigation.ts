console.log("TS + ES6 Investigation");

console.log("read to go...");

//const pi = 3.14159;
//pi = 4;

let firstName: string = "Aidan";

console.log(firstName);

//firstName = 10;

function doSomething(value:string) {


}

doSomething("hello");

/*
class Message {
    private title: string;
    private text: string;

    constructor(title: string, text: string) {
        this.title = title;
        this.text = text;
    }
}
*/
class Message {
    constructor(public title: string, public text: string) { 
        
    }
}

let m = new Message("Message 1", "this is m1");

let m2 = {
    title: "M2", 
    text: "This is m2"
}

function showMessage(m: Message) {
    console.log(`${m.title}`);
    console.log(`${m.text}`);
}

console.log(m);
console.log(m2);

showMessage(m);
showMessage(m2);


// other ES6 features:

// templated strings

let a = 10;
let b = 20;

console.log(`${ a } + ${ b } = ${ a + b }`);

// destructuring

let list = [1, 2, 3, 4];

let [aa, bb, cc, dd] = list;

console.log(`${ aa }, ${ bb }, ${ cc }, ${ dd }`);

let { title, text } = m;


// arrow functions

let names = ["Alice", "Bob", "Carol", "Dan"];

names.forEach((name) => {
    console.log(name);
})

function doSomethingElse(a: string, b: number = 0, c: boolean = false) {

    console.log(`${ a } ${ b } ${ c }`);
}

doSomethingElse("a");
















