import Place from './place'

const PlacesList = props => {

    const renderPlacesList = props.items.map((item, index) => {
        return (
            <Place item={item} index={index} key={index} />
        );
    } )

    return (
        <div className="PlacesLists">
            {renderPlacesList}
        </div>
    );
}

export default PlacesList;