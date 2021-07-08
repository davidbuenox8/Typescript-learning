const carMakers: string[] = ['ford', 'toyota', 'chevy'];;
const dates = [new Date(), new Date()];

// 2 dimentional array : string [][]
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//Help with the inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
//carMakers.push(100); -> gives an error

//Help with map
carMakers.map((car:string):string =>{
    return car.toUpperCase();
});

//Flexible types
const importantDates: (Date|string)[] = [new Date(),'2020-10-10'];
importantDates.push('2010-03-02');
