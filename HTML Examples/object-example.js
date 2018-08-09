function Person(name, age) {
    this.name = name;
    this.age = age;
}

//This is an example of creating a Person object
var p = new Person("Greg", 22);

function main() {
    console.log(p);
}

// Maker Functions
function makePerson(n, a){
    var p = {};
    p.name = n; 
    p.age = a;   
    return p;
}

function makePerson2(n,a){
    var p = {"name": n, "age": a};
    return p;
}

///////////////////////////////////

function Person(n, a, f){
    console.log("new Person Constructor.")
    console.log(this);
    this.name = n;
    this.age = a;
    this.friend = f;

    globalvar = 5;
    console.log(globalvar);
}

function makePerson3(n, a, fn, fa){
    var p = {
        "name": n, 
        "age": a,
        "friend": {"name": fn, "age":fa }
    };
    return p;
}


// the this keyword refers to the 'global object' (window) when used in functions that are not tied to objects. 
function someFunc(){
    console.log(this);
}

var pWithFriends = {
    "name" : "Greg",
    "age": 45,
    "friend": {"name": "Stec", "age": 54},
    makeNewFriend: function(fn, fa){
        console.log(this);
        this.friend2 = {"name": fn, "age": fa};
    }
 };

 pWithFriends.makeNewFriend("Dan Pickles", 78);



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('create').addEventListener('click', function (e) {
        var name = document.getElementById('name').value;
        console.log(document.getElementById('name'));
        var age = document.getElementById('age').value;
        console.log(document.getElementById('age'));
        var p2 = new Person(name, age);
        console.log(p2);

        //document.getElementById('name').value = "hi";

    }, false)

});