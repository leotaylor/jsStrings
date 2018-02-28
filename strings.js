// Challnege # 1
var numOfSandwhiches = 4 * 2;
console.log("numOfSandwhiches", numOfSandwhiches);

// Challenege #2
var name = "Leo";
var string = "Hello, " + name +  " how are you doing today?";
console.log("string", string);

// Challenge #3
var DNA ="GCAT"
var RNA = DNA.replace("T", "U");
console.log("RNA:", RNA);

// Challenge #4
var animal = "Alligator";
// var animal = "Dog";
// var animal = "bird";
if (animal.toLowerCase() === "alligator"){
    console.log("small");
} else if (animal.toLowerCase() != "alligator"){
    console.log("wide");
}

var animal = "Alligator";
// var animal = "Dog";
// var animal = "bird";
if (animal.toLowerCase() === "alligator"){
    console.log("small");
} else {
    console.log("wide");
}


var yarn = "the better string";
var domString = "<h4>" + yarn + "</h4>";

var myDiv = document.getElementById('yarn-holder');
myDiv.innerHTML = domString;


// Challenge #5

var str = "IBMWLOVEbmcatsbmw";
var cars = str.replace(/[BMWbmw]/g, '');
cosnole.log("cats", cats);
var catStr = "<h1>" + cats + "</h1>";
var catElement = document.getElementById("cat-div");
catElement.innerHTML = catStr;

