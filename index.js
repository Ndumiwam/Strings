//Write a program that takes a string as input and prints the string in reverse order.

//Ask the user to enter a string
//Store the string in a variable
let originalString = prompt("Please enter a string:");

//Store reversed string in a variable
let reversedString = "";

//Loop over the whole string starting from last item and add all looped characters into new variable
for (let i = originalString.length-1; i>=0; i--) {
    reversedString += originalString[i]

}

//Display result to console
console.log(reversedString);