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

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let pname: string = "bob";
pname = 'zhangliquan';
let age: number = 24;
let sentence: string = `Hello, my name is ${pname}.
I'll be ${ age + 1} years old next month.`
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];
//元组 Tuple元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
let x: [string, number];
x = ['hello', 10]
//枚举enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color { red, green, blue };
let c: Color = Color.green;
//默认情况下，从0开始为元素编号。你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
enum Color1 { red = 'red', blue = 'blue', green = 'green' }
let c1: string = Color1.blue;

enum Color2 { Red = 1, Green, Blue }
let c2: number = Color2.Green;

enum Color3 { Red1 = 1, Green1, Blue1 }
let colorName: string = Color[2];






//document.body.innerHTML = greeter(user);
document.body.innerHTML = sentence;