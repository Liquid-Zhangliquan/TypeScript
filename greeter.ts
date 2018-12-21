class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

let isDone:boolean=false;
let decLiteral:number=6;
let hexLiteral:number=0xf00d;
let pname:string="bob";
pname='zhangliquan';
let age:number=24;
let sentence:string=`Hello, my name is ${ pname }.

I'll be ${ age + 1 } years old next month.`
//document.body.innerHTML = greeter(user);
document.body.innerHTML = sentence;