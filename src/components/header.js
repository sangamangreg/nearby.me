const Header = props => {
	return (
		<div className="Header">
	      <h1 className="Header_Title">Locate nearest to me</h1>
	      <div className="Header_UserDetails">
	         <p className="Header_Location">
	            Lat.: {props.coords.latitude} lng.: {props.coords.longitude}
	         </p>
	      </div>
	   </div>
	);
}

export default Header
