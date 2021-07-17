class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}
//using generics it would be :
class ArrayOfAnyting<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const arrofstring = new ArrayOfAnyting(['a', 'b', 'c']);
const arrayofnum = new ArrayOfAnyting([1, 'h', 3]);

//Example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//Both together:

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//Generic Constraints
class Car {
  print(): void {
    console.log('I am a car');
  }
}

class House {
  print(): void {
    console.log('I am a house');
  }
}
interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
printHousesOrCars<Car>([new Car(), new Car(), new Car()]);
