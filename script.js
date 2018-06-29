// fundamentals course
// using jscs linter
//using jshint

// basic alert
// alert('this is from the script file');
var x = 10;
var y = 11;

// basic arrays
// arrays have indexed values - can be strings, int other arrays etc
var array = [];
array[0] = 'hello';
array[1] = 'world';

var testarray = array[0] + ' ' + array[1];

// basic objects
// objects key value pairs
var myobj = {
  first: 'hello',
  second: 'world',
  third: 50,
};

// alert(myobj.first + ' '  + myobj.second);

// my details object
var mydetails = {
  firstname: 'Tom',
  secondname: 'Myers',
  age: 36,
};

/* alert(
  'hello, my name is: ' +
    mydetails.firstname +
    ' '  +
    mydetails.secondname +
    '. learning javascript at ' +
    mydetails.age);
*/

// functions
// block of executable code
function functionOne() {
  console.log('yo');

  //js always wants to return something
  return 'yo';
}

functionOne();

function addStuff(a, b) {
  return a + b;
}

addStuff(10, 25);

// function scope
//
var a = 1; // global

// global can be used here

function changeLocal() {

  // global can be used here

  var a = 2; // local

  // local a now = 2

  return a;
}

// if you call a again it will be back to 1
// changeLocal is a child of the main script
// children have access to parental variables
// but parents dont always have access to child variables

function changeGlobal() {

  // global still = 1

  a = 2;

  // global now = 2 because you are not creating a new variable
  // just redefining a
  // a instead of var a

  return a;
}

// keep as much out of global scope as possible!!

b = changeLocal();

// so a would still = a
// and b would == return value from changeLocal
// which would be 2

// conditions

// using boolean values
// checks if aTrue exists

var aTrue = true;

if (aTrue) {

  console.log('yes');
}

// doesnt exist

if (!aTrue) {

  console.log('no');
}

var aFalse = false;

if (!aFalse) {

  console.log('true');
} else {

  console.log('false');
}

// comparisons

var compA = 2;
var compB = 4;
var compC;

// can also do else if etc
if (compB > compA) {
  compC = 'true';
} else {
  compC = 'false';
}

// can be compacted into ternary statements
// only to compare - use if else to run additional code
// can also do multiple comparisons

var compD = (compB > compA) ? 'true' : 'false';

// compD = string 'true'

// can return bool or int etc
var compE = (compB > compA) ? true : false;

// compE = bool true

var compF = (compB == compA) ? 10 : 99;

// compF = 99

function ageCheck(age, country) {
  var response;
  if (country == 'uk') {
    response = age > 18 ? true : false;
  } else if (country == false) {
    response = 'no country';
  } else {
    response = 'none of the above';
  }

  return response;
}

ageCheck(10, 'uk');

// returns false

ageCheck(21, 'uk');

// returns true

ageCheck(21);

// retunrs none of the above
