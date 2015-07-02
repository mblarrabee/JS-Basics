//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
	if(name === "Tyler"){
		return true;
	}
	else{
		return false;
	}
}
console.log(isTyler("Tyler"));
console.log(isTyler("Mike"));


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
	return prompt("Enter your name");
}
console.log(getName());

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

 function welcome(){
 	alert("Welcome," + " " + getName())
 }

 welcome();


//Next problem




//What is the difference between arguments and parameters?

//Parameters are the variables that are in the definition of a function, the arguments are the actual values passeed
//into the function when it is called.


//Next problem  //Answer Here



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //falsy values:  0, "", false, undefined, null, NaN.  You can either check seperately 6 times to see if your value
  //			equals any of those values, or you can do if(variable). If that statement evaluates as false, it is falsy.


//Next Problem



//Create a function called myName that returns your name

  function myName(){
  	return "Mike Larrabee";
  }

//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
	return function(){
		return "Mike Larrabee";
	}
}
console.log(outerFn());
//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.
console.log(innerFn());