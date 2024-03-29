// complete this js code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding greet method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Constructor function for Employee, inheriting from Person
function Employee(name, age, jobTitle) {
  // Call the Person constructor to initialize name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inheriting the Person prototype
Employee.prototype = Object.create(Person.prototype);

// Adding jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
