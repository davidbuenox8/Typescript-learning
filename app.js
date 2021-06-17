var add = function (n1, n2, showResult, phrase) {
    var result = n1 + n2;
    showResult ? console.log(phrase + n1 + n2) : result;
};
var number1 = 10;
var number2 = 5.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
var person = {
    name: 'David',
    age: 30
};
var array;
array = [0, 'Hola'];
var array2;
array2 = ['hola', 'caracola'];
