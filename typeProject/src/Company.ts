import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'Red';
  constructor() {
    (this.companyName = faker.company.companyName()),
      (this.catchPhrase = faker.company.catchPhrase());
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
    <h1>Company name: ${this.companyName}</h1>
    <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
