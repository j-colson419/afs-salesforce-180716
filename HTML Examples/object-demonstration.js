
// the following is a constructor; we know this because our object names are capitalized
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p = new Person("Jess", 45);

function main() {
    console.log(p);
}

// Maker function
function makePerson(n,a){
    var p = {};
    p.name = n;
    // the "name" property of p is assigned to n
    p.age = a;   
    console.log(p);
    return p;
}

function makePerson2(n,a){
    var p = {"name":n, "age":a}
    return p;
}


///////////////////////////////////////////////////////

function Person(n, a, f) {
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
        "friend": {"name": fn, "age": fa}
    };
    return p;
}

// the this keword refers to the 'global objec' window
// when used in functions that are not tied to objects.
function someFunc(){
    console.log(this);
}

var pWithFriends = {
    "name": "Kelcey", 
    "age":22, 
    "friend": {"name": "Janetta", "age": 22},
    makeNewFriend: function(fn, fa){
        console.log(this);
        this.friend2 = {"name": fn, "age": fa};
    }
};

pWithFriends.makeNewFriend("Atiena Branch", 22);


document.addEventListener('DOMContentLoaded', function () {
    // "DOMContentLoaded" is an event; the function will be called once all of the DOMContent is loaded from whatever page the script is tied to.
    // dom manipulation = editing your object model
    document.getElementById('create').addEventListener('click', function (e)
    // e is the parameter: event
    {
        var name = document.getElementById('name').value;
        console.log(document.getElementById('name'));
        var age = document.getElementById('age').value;
        console.log(document.getElementById('age'));
        var p2 = new Person(name, age);
        console.log(p2);
        document.getElementById('name').value = "hi";

    }, false)

});