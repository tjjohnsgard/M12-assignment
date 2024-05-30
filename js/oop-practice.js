// STEP 1: Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax.

// class Cat {
//  constructor(name) {
//     this.name = name;
//  }
//
//  roar() {
//    console.log("Roar! I am " + this.name);
//  }
// }
//
// const Dog = function(name) {
//  this.name = name;
// };
//
// Dog.prototype.howl = function() {
//  console.log("Howl! I am " + this.name);
// };
//
// const cat1 = new Cat("Scar");
// const dog1 = new Dog("Anubis");
//
// cat1.roar();
// dog1.howl();

// STEP 2: Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.

// class Cat {
//  constructor(name) {
//   this.name = name;
//  }
//
//  roar() {
//    console.log("Roar! I'm " + this.name);
//  }
// }
//
// const Dog = function(name) {
//  this.name = name;
// };
//
// Dog.prototype.howl = function() {
//   console.log("Howl! I'm " + this.name);
// };
//
// const cat1 = new Cat("Simba");
// cat1.roar();
//
// const dog1 = new Dog("Cerebus");
// dog1.howl();

// STEP 3: Create new class using constructor syntax called Animal. Create method within the Animal class that when called...

// class Animal {
//    constructor() {
//      console.log("The Animal has been created");
//    }
//  }
//
// const animal1 = new Animal();
  
// STEP 4: Replicate above code so that class accepts an argument and that value is what is displayed in the console window.

// class Animal {
//   constructor(message) {
//    console.log(message);
//  }
// }
//
// const animal2 = new Animal("The Animal has been created");
  
// STEP 5: Start over and now create new class using constructor syntax called Animal. Define five properties within your...

// class Animal {
//   constructor(type, breed, color, height, length) {
//
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
//   }
//
//   getInfo() {
//     return `Animal Info:\n  Type: ${this.type}\n  Breed: ${this.breed}\n  Color: ${this.color}\n  Height: ${this.height} inches\n  Length: ${this.length} inches`;
//  }
// }
//
// const dog1 = new Animal('Dog', 'Miniature Schnauzer', 'Salt & Pepper', 18, 30);
//
// console.log(dog1.getInfo());

// STEP 6: Use for-in loop to loop thru and display all properties in  Animal class. You should see total of 5 properties...

// class Animal {
//
//   constructor(type, breed, color, height, length) {
//
//       this.type = type;
//       this.breed = breed;
//       this.color = color;
//       this.height = height;
//       this.length = length;
//  }
//
//   getInfo() {
//       return `Animal Info:\n  Type: ${this.type}\n  Breed: ${this.breed}\n  Color: ${this.color}\n  Height: ${this.height} inches\n  Length: ${this.length} inches`;
//   }
// }
//
// const dog1 = new Animal('Dog', 'Miniature Schnauzer', 'Salt & Pepper', 18, 30);
// 
// console.log(`Properties of dog1:`);
// for (let property in dog1) {
//   if (dog1.hasOwnProperty(property)) {
//       console.log(`${property}: ${dog1[property]}`);
//   }
// }

// STEP 7: Create public method called speak. In speak method use conditional to check type of Animal created. If a dog...

// class Animal {
//   constructor(type, breed, color) {
//       this.type = type;
//       this.breed = breed;
//       this.color = color;
//   }
//
//   speak() {
//       if (this.type.toLowerCase() === "dog") {
//           return `The ${this.color} dog is barking!`;
//       } else if (this.type.toLowerCase() === "cat") {
//           return `The ${this.color} cat is meowing!`;
//       }
//   }
// }
//
// const dog1 = new Animal("Dog", "Miniature Schnauzer", "Salt & Pepper");
// const cat1 = new Animal("Cat", "Tiger", "Orange & Black");
//
// console.log(dog1.speak());
// console.log(cat1.speak());

// STEP 8: Convert all properties to private properties. Create private method called checkType(). In this method you will...

// class Animal {
//   #type;
//
//   constructor(type) {
//     this.#type = type;
//   }
//
//   #checkType() {
//     return this.#type.toLowerCase() === "dog" ? "dog" : "cat";
//   }
//
//   speak() {
//     const animalType = this.#checkType();
//    return `The ${animalType} has made a noise!`;
//  }
// }
//
// const dog1 = new Animal("Dog");
// const cat1 = new Animal("Cat");
//
// console.log(dog1.speak());
// console.log(cat1.speak());
  
// STEP 9: Create String method called find Words inherits from native String Object. Method should find all instances of a...

// function Paragraph(text) {
//   this.text = text;
// }
//
// Paragraph.prototype.findWords = function(word) {
//   const regex = new RegExp(`\\b${word}\\b`, "gi");
//   const matches = this.text.match(regex);
//   return matches ? matches.length : 0;
// };
//
// const paragraph = new Paragraph("This is a sample paragraph to find the word find. It contains the word 'find' multiple times.");
//
// const wordCount = paragraph.findWords("find");
//
// alert(`The word 'find' was found ${wordCount} times in the paragraph.`);