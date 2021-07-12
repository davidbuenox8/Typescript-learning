/* import {User} from './User';
import { Company } from './Company'; */

const divmap = document.getElementById('map');
new google.maps.Map(divmap, {
  zoom: 2,
  center: {
    lat: 0,
    lng: 0,
  },
});
