
function main() {
    console.log(p);
    // this is variable hoisting (refering to a variable in the code above), becuase p is declared at line 11

}
// This is a constructor for the person object
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// This is an example of creating a person object
var p = new Person("Jess", 45);

function main() {
    console.log(p);
}

// Maker Functions
function makePerson(n, a){
    var p = {};
    p.name = n;
    // p.name specifies what value the property contains
    p.age = a;
    return p;
}

function makePerson2(n, a){
    var p = { "name": n, "age":a};
    return p;
}

function Person(n, a, f){
    console.log("new Person Constructor.");
    console.log(this);
    this.name = n;
    this.age = a;
    this.friend = f;

    globalvar = 5;
}

function makePerson3(n, a, fn, fa){
    var p = {
        "name": n,
        "age": a,
        "friend":{"name": fn, "age": fa}
    };
    return p;
    // need a semi-colon at the end of statements (this case, the p assignment statement)
}
// the this keyword refers to the 'global object' (window) when used in functions that are not tied to objects
function someFunc(){
    console.log(this);
}


var pWithFriends = {
    "name": "Walter",
    "age": 22,
    "friend": {"name": "Will", "age": 23},
    makeNewFriend: function(fn, fa){
        console.log(this);
        this.friend2 = {"name": fn, "age": fa};
    }
};

pWithFriends.makeNewFriend("Dan Pickles", 78);

// Line 61 does not get called until line 66 is invoked

// dommanipulation
// DOM stands for document object model
document.addEventListener('DOMContentLoaded', function () {
    // DOMContentLoaded is an event that is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
    document.getElementById('create').addEventListener('click', function (e) {
        // (e) is a parameter event
        var name = document.getElementById('name').value;
        console.log(document.getElementById('name'));
        var age = document.getElementById('age').value;
        console.log(document.getElementById('age'));
        var p2 = new Person(name, age);
        console.log(p2);
        // document.getElementById('name').value = "Waddup";
    }, false);


});