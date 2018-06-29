// fundamentals course
// using jscs linter
//using jshint

//alert('this is from the script file');
var x = 10;
var y = 11;

//arrays have indexed values - can be strings, int other arrays etc
var array = [];
array[0] = 'hello';
array[1] = 'world';

var testarray = array[0] + ' ' + array[1];

//objects key value pairs
var myobj = {
  first: 'hello',
  second: 'world',
  third: 50,
};

// testing arrays
//alert(myobj.first + ' '  + myobj.second);

// my details object
var mydetails = {
  firstname: 'Tom',
  secondname: 'Myers',
  age: 36,
};
alert(
  'hello, my name is: ' +
    mydetails.firstname +
    ' '  +
    mydetails.secondname +
    '. learning javascript at ' +
    mydetails.age);
