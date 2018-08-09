function Person (name, age){
    this.name=name
    this.age=age
}
//example of creating person p
var p = new Person ("Jess" , 45)


// Person is a constructor , this is an example of creating a person object 
function main() {
    // alert('hello world');
    console.log (p)
}

//maker function
function makePerson(n, a){
    var p = {};
   p.name= n;
   p.age= a;
//what property of p (name, or whatever) you want to assign 
    return p;
}

function makePerson2(n,a){
    var p = {"name": n, "age": a};
    return p;
}

////////// new attribute to person
function Person(n,a,f){
    console.log(this);
    this.name= n;
    this.age = a;
    this.friend= f;

    globalvar=5;


}

function makePerson3 (n,a,fn,fa){
    var p = {
        "name":n,
        "age":a,
        "friend": {"name":fn, "age":fa}
    };
    return p; 
}

function someFunc(){
    console.log(this);
}

var pWithFriends= {
    "name": "Jess",
    "age": 45,
    "friend": {"name": "Rachel", "age": 54},
    makeNewFriend: function (fn, fa){
        console.log(this);
        this.friend2= {"name": fn, "age":fa};

    }
};

pWithFriends.makeNewFriend("pickles",87);






document.addEventListener('DOMContentLoaded', function(){
document.getElementById('create').addEventListener('click', function(e){
    var name = document.getElementById("name").value;
    console.log (document.getElementById ('name'));
    var age= document.getElementById ("age").value
    console.log (document.getElementById ('age'));
    var p2 = new Person(name,age); 
    console.log (p2);
})

}); 