import { useEffect, useState } from 'react';
import PlacesList from './placeslist'

const RightBar = props => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        if(props.coords.latitude != null && props.coords.longitude != null) {
            
            const type = props.type || 'atm';
            const request = {
                location: {
                    lat: props.coords.latitude,
                    lng: props.coords.longitude
                },
                radius: '1500',
                type: [type]
            };
            
            const service = new props.google.maps.places.PlacesService(props.map);
            service.nearbySearch(request, (results, status) => {
                if (status === props.google.maps.places.PlacesServiceStatus.OK) {
                    setItems(results);
                } else {
                    console.log(status);
                }
            });
        } else {
            console.log("No lat long found so far")
        }
    });

    return (
        <div className="RightArea">
          <div className="MainContainer">
            <div id="map"></div>
                <PlacesList items={items} />
            

          </div>
        </div>
    );
}

export default RightBar;