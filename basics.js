/* Create a `myName` variable and assign it a String value */

/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */

/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */

/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */

/* Create a `dog` object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */

var myName = "Bob";

var person = {
	name: myName,
	age: 32
};

var canDrive = null;

if (person.age >= 16){
	canDrive = true;
}

function greet(name){
	console.log("Hello, my name is " + name);
}

var dataTypes = ["a", 1, true, undefined, null, {obj: "Is Object"}];

var dog = {
	bark: function(){console.log("bark!");},
	name: "Spot"
};