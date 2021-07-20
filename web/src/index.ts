import { User } from './models/User';

const user = new User({ name: 'newName', age: 7 });

user.save();
