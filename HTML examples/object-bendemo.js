
// This is a constructor for the Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// This is an example of creating a person object
var p = new Person("Ben", 22);
// need to use new otherwise it would not know we are creating a new object
// DOM= Document object model

function main() {
    console.log(p);
}
// this is variable hoisting, because p is declared



// Maker Function example
function makePerson(n, a) {
    var p = {};
    p.name = n;
    p.age = a;
    return p;

}

function makePerson2(n, a) {
    var p = { "name": n, "age": a };
    return p;
}

///////////////////////////////////////////////

function Person(n, a, f) {
    console.log(this);
    this.name = n;
    this.age = a;
    this.friend = f;

    globalvar = 5;
    
}


function makePerson3(n, a, fn, fa) {
    var p = {
        "name": n,
        "age": a,
        "friend": { "name": fn, "age": fa }
    };
    return p;
}
// The  this keyword refers to the 'global object' (window) when used in functions that are not tied to objects.
function someFunc() {
    console.log(this);
}

var pWithFriends = {
    "name": "Ben",
    "age": 22,
    "friend": { "name": "Steve", "age": 22 },
    makeNewFriend: function (fn, fa) {
        console.log(this);
        this.friend2 = { "name": fn, "age": fa };

    }
};

pWithFriends.makeNewFriend("Jon", 30);











document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('create').addEventListener('click', function (e) {
        var name = document.getElementById('name').value;

        console.log(document.getElementById('name'));

        var age = document.getElementById('age').value;

        console.log(document.getElementById('age'));

        var p2 = new Person(name, age);

        console.log(p2);

        document.getElementById('name').value = "Hi";


    }, false);

});
