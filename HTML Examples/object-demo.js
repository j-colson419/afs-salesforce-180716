function main(){
    console.log("my person: " + p)
}

function Person(name, age){
    this.name = name;
    this.age = age;
}

var p = new Person("Marissa", 22);