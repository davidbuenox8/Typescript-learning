const add = (a:number, b:number): number =>{
return a + b;
};

const subtract = (a:number, b:number): number=>{
  return  a - b
};

function divide(a:number, b:number): number {
return a/b;
};

const multiply = function(a: number,b: number): number{
    return a*b;
};

const logger = (message: string):void=>{
    console.log(message);
};
//we we never expect to return anything
const throwError = (message: string):never=>{
    throw new Error(message);
};

const throwErrorVoid = (message: string):void=>{
    if(!message){
        throw new Error(message);
    }
};

const throwErrorString = (message: string):string=>{
    if(!message){
        throw new Error(message);
    };
     return 'hi'
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

//this could also be logWeather = (forecast) etc
const logWeather = ({date, weather}: {date: Date , weather: string}):void =>{
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);