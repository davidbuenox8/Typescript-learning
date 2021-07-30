import { User } from './models/User';

const user = new User({ id: 2, name: 'newer Name', age: 0 });

user.on('save', () => {
  console.log(user);
});

user.save();
