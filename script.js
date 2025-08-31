// Part 1: JavaScript Basics

function checkAge() {
  let age = prompt("Enter your age:"); // user input
  age = Number(age);

  if (age >= 18) {
    document.getElementById("basicOutput").innerText = "✅ You are an adult.";
  } else {
    document.getElementById("basicOutput").innerText = "❌ You are underage.";
  }
}

// Part 2: Functions
// Function to add numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to show sum in DOM
function showSum() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);

  let result = addNumbers(n1, n2); // reusing function
  document.getElementById("sumOutput").innerText = "Sum = " + result;
}

// Part 3: Loops
// Example 1: Countdown using for loop
function countdown() {
  let output = "";
  for (let i = 5; i >= 1; i--) {
    output += i + " ";
  }
  document.getElementById("countdownOutput").innerText = output + "🎉 Go!";
}

// Example 2: Looping through an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach(function(fruit) {
  console.log("I like " + fruit); // logs to console
});

// Part 4: DOM Manipulation
let toggled = true;

// Toggle text example
function toggleText() {
  let element = document.getElementById("toggleText");
  if (toggled) {
    element.innerText = "Message is hidden now!";
  } else {
    element.innerText = "Hello, I’m dynamic text!";
  }
  toggled = !toggled;
}

function addListItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.innerText = "New item added!";
  list.appendChild(newItem);
}

document.body.onload = function() {
  document.querySelector("h1").style.color = "teal";
};
