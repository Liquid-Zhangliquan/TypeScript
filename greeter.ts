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

//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
function warnuser(): void {
    console.log("this is my warning message");
}

//类型断言
//有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
//通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
let somevalue: any = "this is a string";
let strlength: number = (<string>somevalue).length;
let _strlength: number = (somevalue as string).length;

//解构数组 相当于使用了索引
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

first = input[0];
second = input[1];

[first, second] = [second, first];

let [one, ...rest] = [1, 2, 3, 4];
console.log(one);//outputs 1;
console.log(rest);//outputs [2,3,4]

//解构对象
let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
let { a, b } = o;
({ a, b } = { a: "baz", b: 101 });

function f({ a = "", b = 0 } = {}): void {
    // ...
}
f();










//document.body.innerHTML = greeter(user);
document.body.innerHTML = sentence;