

// this is a constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p = new Person("Michael", 23);

function main() {
    console.log(p);
}


//Maker function

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


function Person(n, a, f) {
    console.log("new Person Constructor.");
    console.log(this);
    this.name = n;
    this.age = a;
    this.friend = f;

    globalvar =5;
}

function makePerson3(n, a, fn, fa) {
    var p = {
        "name": n,
        "age": a,
        "friend":{"name":fn, "age":fa}
   };
   return p;
}
//the this keyword refers to the 'global object' (window) when used in function that are not tied to objects
function someFunc(){
    console.log(this);
}


var pWithFriends = {
    "name":"Michael",
    "age": 23,
    "friend": {"name": "Kenz", "age": 23},
    makeNewFriend: function(fn,fa){
        console.log(this);
        this.friend2 = {"name": fn, "age": fa};
    }
};

pWithFriends.makeNewFriend("Jake Waze", 23);

// DOM-data object model
// dom manipulation 
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('create').addEventListener('click', function (e) {
        var name = document.getElementById('name').value;
        console.log(document.getElementById('name'));
        var age = document.getElementById('age').value;
        console.log(document.getElementById('age'));
        var p2 = new Person(name, age);
        console.log(p2);

        document.getElementById('name').value = "Good Job!"

    }, false
    );
});