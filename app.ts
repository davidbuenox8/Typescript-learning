var add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    var result = n1 + n2;
    showResult ? console.log(phrase + n1 + n2) : result
}


var number1 = 10;
var number2 = 5.8;
var printResult = true;
var resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);


var person: {
    name: String,
    age: Number
} = {
    name: 'David',
    age: 30
}

var array: any[];
array = [0, 'Hola'];

var array2: string[];
array2 = ['hola', 'caracola']
