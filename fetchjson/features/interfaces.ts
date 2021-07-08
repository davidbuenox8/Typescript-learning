
//it works as long as the object contains this keys. it can also have more keys 
interface Vehicle {
    name: string,
    year: number,
    broken: boolean,
    summary():string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary():string{
        return `Name: ${this.name}`
    }
};

const printVehicle = ( vehicle:Vehicle):void=>{
console.log(`Name: ${vehicle.name}`);
console.log(`Year: ${vehicle.year}`);
console.log(`broken? ${vehicle.broken}`);
console.log(vehicle.summary()); 
};

printVehicle(oldCivic);

