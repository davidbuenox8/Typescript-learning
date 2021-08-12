//if we dont add the types is also ok
//as the program guesses the type of value.
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//class
class Flower {
  type: string = 'Rose';
}

const flower: Flower = new Flower();
//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
//if the function doesnt have anything to return = void
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

let oranges = 4; //type:number
let peaches; //type: any
peaches = 2;

//when to use annotations
//1)Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x:10, y:20}

//2)When we declare a variable on one line
//and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3) Variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
