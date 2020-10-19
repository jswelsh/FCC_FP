/* function sentensify(str) {
    // Only change code below this line
    return str.split(/[.,-]/).join(" ")
    // Only change code above this line
  }
  console.log(sentensify("May-the-force-be-with-you"));
   */


/* 
Fill in the urlSlug function so it converts a string
 title and returns the hyphenated version for the URL. 
 You can use any of the methods covered in this section, 
 and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between 
words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces
*/
// The global variable
/* var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
    return title[0] === " " ? title.slice(1).toLowerCase().split(/\s+/).join("-") : 
                              title.toLowerCase().split(/\s+/).join("-")
  }
  console.log(urlSlug("Winter Is Coming"))
  console.log(urlSlug(" Winter Is   Coming")) 
*/
// Only change code above this line
/* 
The every method works with arrays to check if every element 
passes a particular test. It returns a Boolean value - true 
if all values meet the criteria, false if not.

For example, the following code would check if every element
in the numbers array is less than 10:

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
Use the every method inside the checkPositive function to 
check if every element in arr is positive. The function 
should return a Boolean value.
*/

/* function checkPositive(arr) {
    // Only change code below this line
    return arr.every(value=> value >=0 )
  
    // Only change code above this line
  }
  console.log(checkPositive([1, 2, 3, -4, 5]));
   */

/* 
The some method works with arrays to check if 
any element passes a particular test. It returns 
a Boolean value - true if any of the values meet 
the criteria, false if not.

For example, the following code would check if 
any element in the numbers array is less than 10:

var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true
Use the some method inside the checkPositive 
function to check if any element in arr is positive. 
The function should return a Boolean value.
*/   
/* function checkPositive(arr) {
    // Only change code below this line
    return arr.some(value => value >=0)
  
    // Only change code above this line
  }
  console.log(checkPositive([1, 2, 3, -4, 5]));
*/

/* 
The arity of a function is the number of 
arguments it requires. Currying a function 
means to convert a function of N arity 
into N functions of arity 1.

In other words, it restructures a function 
so it takes one argument, then returns 
another function that takes the next 
argument, and so on.

Here's an example:

//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
This is useful in your program if you 
can't supply all the arguments to a 
function at one time. You can save each 
function call into a variable, which will 
hold the returned function reference that 
takes the next argument when it's available. 
Here's an example using the curried function 
in the example above:

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
Similarly, partial application can be described 
as applying a few arguments to a function at a 
time and returning another function that is 
applied to more arguments. Here's an example:

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
Fill in the body of the add function so it uses 
currying to add parameters x, y, and z.
*/
/* 
function add(x) {
    // Only change code below this line
  
  
    // Only change code above this line
  }
  add(10)(20)(30);
   */
