console.log("TS + ES6 Investigation");
console.log("read to go...");
//const pi = 3.14159;
//pi = 4;
var firstName = "Aidan";
console.log(firstName);
//firstName = 10;
function doSomething(value) {
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
var Message = /** @class */ (function () {
    function Message(title, text) {
        this.title = title;
        this.text = text;
    }
    return Message;
}());
var m = new Message("Message 1", "this is m1");
var m2 = {
    title: "M2",
    text: "This is m2"
};
function showMessage(m) {
    console.log("".concat(m.title));
    console.log("".concat(m.text));
}
console.log(m);
console.log(m2);
showMessage(m);
showMessage(m2);
// other ES6 features:
// templated strings
var a = 10;
var b = 20;
console.log("".concat(a, " + ").concat(b, " = ").concat(a + b));
// destructuring
var list = [1, 2, 3, 4];
var aa = list[0], bb = list[1], cc = list[2], dd = list[3];
console.log("".concat(aa, ", ").concat(bb, ", ").concat(cc, ", ").concat(dd));
var title = m.title, text = m.text;
// arrow functions
var names = ["Alice", "Bob", "Carol", "Dan"];
names.forEach(function (name) {
    console.log(name);
});
function doSomethingElse(a, b, c) {
    if (b === void 0) { b = 0; }
    if (c === void 0) { c = false; }
    console.log("".concat(a, " ").concat(b, " ").concat(c));
}
doSomethingElse("a");
