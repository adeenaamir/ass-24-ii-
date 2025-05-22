// Qno1. Display Current Date & Time
function showDateTime() {
    const now = new Date();
    document.write("Current Date and Time: " + now);
}


// Qno2 Greet User by Full Name
function greetUser(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "!");
}


// Qno3Add Two Numbers (User Input)
function addNumbers() {
    const num1 = +prompt("Enter first number:");
    const num2 = +prompt("Enter second number:");
    return num1 + num2;
}

// Qno4 Calculator Function
function calculator(num1, num2, operator) {
    let result;
    switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        default: result = "Invalid operator";
    }
    document.write("Result: " + result);
    return result;
}


// Qno 5 Square of a Number
function square(num) {
    return num * num;
}


// Qno 7Display Counting from Start to End
function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}


// Qno9 Area of Rectangle (i)
function areaOfRectangleValue(width, height) {
    return width * height;
}

// value (ii)
let w = 10;
let h = 5;
function areaOfRectangleVariable() {
    return w * h;
}


// Qno 12Find Longest Word in a String
function findLongestWord(str) {
    const words = str.split(' ');
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
