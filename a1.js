//console.log('test nodemon...');
class Person{
    let name: string;
    var age: int;
    init(name: string, age: int){
        self.name = name;
        self.age = age
    }
    function sayHello(){
        print("chào bạn", tôi là \(name), \(age) tuổi")
    }
}

let me = Person(name: "Doan Vo", age: 20)

// truy cap thuoc tinh cua doi tuong
print(me.name, me.age);
me.sayHello()