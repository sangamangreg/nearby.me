import Header from './header'
import Sidebar from './sidebar'
import RightBar from './rightbar'
import { getLocation } from '../model/GeoLocation'
import { useEffect, useState } from 'react';
import EventHandler from '../model/EventHandler';

function App() {
  const [coords, setCoords] = useState({"latitude": null, "longitude": null});
  const [map, setMap] = useState(null);
  const [type, setType] = useState('atm');
  const google = window.google;

  const updateType = types => {
    setType(types[0]);  
  }

  EventHandler.subscribe('searchNearby', updateType);

  useEffect(() => {
    getLocation().then( ( { coords: {latitude, longitude} } ) => {     
      setCoords({"latitude": latitude, "longitude": longitude})
      setMap(new google.maps.Map(
        document.getElementById('map'), {center: new google.maps.LatLng(latitude, longitude), zoom: 15}))
    }).catch(error => {
      console.log("no permission to fetch geo location");
    });
  }, []);
  
  return (
    <div className="mainDiv">    
      <Header coords={coords} />
      <div className="container">
        <Sidebar />
        <RightBar coords={coords} map={map} google={google} type={type} />
      </div>
    </div>
  );
}

export default App;
