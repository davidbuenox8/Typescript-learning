import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'Blue';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
    <h1>User name: ${this.name}</h1>
    </div>`;
  }
}
