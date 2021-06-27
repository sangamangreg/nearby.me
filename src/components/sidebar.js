import EventHandler from '../model/EventHandler'

const Sidebar = props => {

	const searchItems = {
		'atm': "ATM",
		'airport': 'Airport',
		'bank': 'Bank',
		'bus_station': 'Bus Stops',
		'hospital': 'Hospitals',
		'local_government_office': 'Local Government Office',
		'pharmacy': 'Pharmacy',
		'train_station': "Train Stations"		
	};

	const onClickEvent = event => {
		let type = event.target.getAttribute('data-type');
		EventHandler.publish('searchNearby', [type]);
	}

	return (
		<div className={'leftSide'}>
	      <h2 className="placesTypes">Nearby</h2>
	      <ul className="typesLists">
	        {
	          Object.keys(searchItems).map(searchItem => {
	            return <li onClick={onClickEvent.bind(searchItem)} key={searchItem} data-type={searchItem} >
	              {searchItems[searchItem]}
	            </li>
	          })
	        }
	      </ul>
	    </div>
	);
}

export default Sidebar
