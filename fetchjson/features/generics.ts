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

new ArrayOfAnyting<string>(['a', 'b', 'c']);
