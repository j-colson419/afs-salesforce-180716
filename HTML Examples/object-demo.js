function main(){
    console.log(p);
}

function Person(name, age){
    this.name = name;
    this.age = age;
}

var p = new Person("Jess", 45);

document.getElementById('create').addEventListener('click', function(e){

    var name = document.getElementById('name').value;

    console.log(document.getElementById('name'));

    var age = document.getElementById('age').value;

    console.log(document.getElementById('age'));

    var p2 = new Person(name, age);

    console.log(p2);

    document.getElementById('name').value = "Hi";

}, false)