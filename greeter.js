var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var pname = "bob";
pname = 'zhangliquan';
var age = 24;
var sentence = "Hello, my name is " + pname + ".\n\nI'll be " + (age + 1) + " years old next month.";
//document.body.innerHTML = greeter(user);
document.body.innerHTML = sentence;
