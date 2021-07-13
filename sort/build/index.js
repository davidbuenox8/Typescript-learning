"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
/* const numbersCollection = new NumbersCollection([4, 2, 0, -6, 3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data); */
/* const charactersCollection = new CharactersCollection('Hi High!');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data); */
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(2);
linkedList.add(19);
linkedList.add(467);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
