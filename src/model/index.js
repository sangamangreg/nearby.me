import { getLocation } from './GeoLocation';

export const createModel = () => {
  const acceptors = {
    getUserLocation: () => getLocation().then( ( { coords: {latitude, longitude} } ) => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAG1omTnZbMG6TxxaxOTqRS8YIqFCECOos&latlng=19.276340,72.959084`)
      .then(response => response.json())
      .then(contents => {
        let index = 0;
        const address = contents.results[0].address_components.reduce((str, ar) => {
          switch (ar.types[0]) {
            case 'locality':
            case 'administrative_area_level_2':
            case 'administrative_area_level_1':
            case 'country':
            case 'postal_code':
              str = (index > 0) ? `${str}, ${ar.long_name}` : `${ar.long_name}`; 
              index++;
              break;
            default:
              break;
          }
          return str.trim();
        }, '')
        console.log(latitude, longitude, address);
      })
      .catch(() => console.log("Can’t access url response. Blocked by browser?"));
    }),

    onMapReady: ( { mapProps, map } ) => {
      getLocation().then( ( { coords: {latitude, longitude} } ) => {
        acceptors.searchNearby = acceptors.searchNearby(mapProps, map, latitude, longitude);
        acceptors.searchNearby(['atm']);
      });
    },

    searchNearby: ( mapProps, map, latitude, longitude ) => ( types ) => {
      const { google } = mapProps;
      const request = {
        location: {
          lat: latitude,
          lng: longitude
        },
        radius: '100000',
        type: types
      };

      const service = new google.maps.places.PlacesService(map);
  
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log("results", results);
        }else{
          console.log("{status, types}", {status, types});
        }
      });
    }
  };

  return {
    present: proposal => {
      const key = Object.keys(proposal)[0];
      const value = proposal[key];
      acceptors[key](value);
    }
  };
};
