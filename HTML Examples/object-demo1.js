function main() {
    console.log(p);
    //this is variable hoisting, because p is declared at line 11
}

// This is the constructor for the Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// This is an example of creating a Person object
// p is an instance of the person object
var p = new Person("Grace", 21);

function main() {
    console.log(p);
}

// Maker function
function makePerson(n, a){
    var p = {};
    p.name = n;
    p.age = a;
    return p;
}

function makePerson2(n,a){
    var p = {"name":n,"age":a};
    return p;
}

///////////////////////

// "this." refers to object being created
function Person(n,a,f){
    console.log(this);
    var p = {"name":n,"age":a};
    this.name = n;
    this.age = a;
    this.friend = f;

    globalvar=5;
}

function makePerson3(n,a,fn,fa){
    var p = {
        "name":n,
        "age":a,
        "friend": {"name":fn, "age":fa}
    };
    return p;
}

// the this keyword refers to the 'global object (window) when used in functions that are not tied to objects
function somefunc(){
    console.log(this);
}

var pWithFriends = {
    "name":"Grace",
    "age":21,
    "friend":{"name":"Rachel", "age":25},
    makeNewFriend: function(fn,fa){
        console.log(this)
        this.friend2 = {"name":fn, "age":fa};
    }
};

pWithFriends.makeNewFriend("Claire",20);


document.addEventListener('DOMContentLoaded', function () {


    document.getElementById('create').addEventListener('click', function (e) {
        var name = document.getElementById('name').value;
        console.log(document.getElementById('name'));
        var age = document.getElementById('age').value;
        console.log(document.getElementById('age'));
        var p2 = new Person(name, age);
        console.log(p2);

        document.getElementById('name').value = "Hi";

    }, false)

});
