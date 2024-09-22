class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Getter method
    getName() {
        return this.name;
    }

    // Setter method
    setName(newName) {
        this.name = newName;
    }

    // Regular Function
    greetRegular() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }

    // Arrow Function
    greetArrow() {
        return () => {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        };
    }
}

// Create a new Person object
const person = new Person("John Doe", 30);

console.log(person.getName()); // Output: John Doe
person.setName("Jane Smith");
console.log(person.getName()); // Output: Jane Smith

// Using regular function
person.greetRegular();

// Using arrow function as member function
const greetArrowFunction = person.greetArrow();
greetArrowFunction(); 

// Using arrow function as non-member function
const greetArrowNonMember = (person) => {
    console.log(`Hello, my name is ${person.name} and I'm ${person.age} years old.`);
};
greetArrowNonMember(person);