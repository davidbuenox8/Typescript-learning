const drink= {
    color: 'brown',
    carbonated: true,
    sugar: 40
};
//Type alias
type Drink =[ string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
//OR  const pepsi:[string, boolean, number] = ['brown', true, 40];

//they are not used very offen because it is harder to understand. Example:
const carSpecs:[number, number] = [400, 3234];

const carStats = {
    horsePower: 400,
    weight: 3234
}; 