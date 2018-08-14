// document.getElementById("body").addEventListener("click", function(){
//     console.log("body");
// }, false);

// document.getElementById("div1").addEventListener("click", function(){
//     console.log("div1 bubble");
// }, false);

// document.getElementById("p2").addEventListener("click", function(){
//     console.log("p2");
// }, false);

// document.getElementById("div1").addEventListener("click", function(){
//     console.log("div1 capture");
// }, true); 

globalVar1 = 6;
globalVar2 = 10;
var someScopeVar = "What is my scope?";

function myFunc(){
    var funcVar1 = "I am a function scoped variable";
    globalVar3 = "I am a global scoped variable within a function";

    console.log(funcVar1);
    console.log(globalVar3);
    console.log(someScopeVar);

    var globalVar1 = 3;
    console.log(globalVar1);


    function myFunc2(){
        console.log(funcVar1);
        var nestedVar = "I am nested";
    }

    console.log(nestedVar);
}





