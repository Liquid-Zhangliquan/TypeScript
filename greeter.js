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
var sentence = "Hello, my name is " + pname + ".\nI'll be " + (age + 1) + " years old next month.";
var list = [1, 2, 3];
var list1 = [1, 2, 3];
//元组 Tuple元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
var x;
x = ['hello', 10];
//枚举enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
//默认情况下，从0开始为元素编号。你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
var Color1;
(function (Color1) {
    Color1["red"] = "red";
    Color1["blue"] = "blue";
    Color1["green"] = "green";
})(Color1 || (Color1 = {}));
var c1 = Color1.blue;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
var colorName = Color3[2];
//document.body.innerHTML = greeter(user);
document.body.innerHTML = sentence;
