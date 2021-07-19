import { User } from './models/User';

const user = new User({ name: 'David', age: 27 });
user.set({ name: 'pepe' });
console.log(user.get('name'));
console.log(user.get('age'));
