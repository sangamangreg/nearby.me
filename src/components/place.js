const Place = props => {
    const place = props.item;
    return (
        <div className="PlaceBox" key={props.index}>
            <div className="PlaceBoxWarp">
                <div className="PlaceBox_Left">
                    <figure className="image">
                        <img src={place.icon} alt="" />
                    </figure>
                </div>
                <div className="PlaceBox_Content">
                    <p className="PlaceBox_Title">{place.name}</p>
                    <p className="PlaceBox_Address">{place.vicinity}</p>
                </div>
            </div>
            <div className="PlaceBox_Footer">
                <div className="PlaceBox_FooterText">
                {place.opening_hours ? place.opening_hours.open_now ? 'Open right now' : 'Closed' : 'Not Sure'}
                </div>
            </div>
        </div>
    );
}

export default Place;