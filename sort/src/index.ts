import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

/* const numbersCollection = new NumbersCollection([4, 2, 0, -6, 3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data); */

/* const charactersCollection = new CharactersCollection('Hi High!');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data); */

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(2);
linkedList.add(19);
linkedList.add(467);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
