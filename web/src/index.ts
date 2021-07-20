import { User } from './models/User';
import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'myname',
  age: 20,
});
