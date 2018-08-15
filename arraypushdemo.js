//build array that stores first and last names. The default value of the array will be empty
var firstArr = [];
var lastArr = [];
//ask user for a first name and store it in the first names array
var userFirst = prompt("First name");
firstArr.push(userFirst);
//ask user for the last name and store it in the last names array
var userLast = ("Last name");
lastArr.push(userLast);
//display to the window both first and last name from the array with the length of both arrays
window.alert(firstArr[0] + " " + lastArr[0] + firstArr.length + lastArr.length);