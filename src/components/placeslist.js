import Place from './place'

const PlacesList = props => {

    const renderPlacesList = props.items.map((item, index) => {
        return (
            <Place item={item} index={index} key={index} />
        );
    } )

    return (
        <div className="PlacesLists">
            {
                props.items.length > 0 ? renderPlacesList : (
                    <div>
                       No results found.
                    </div>
                )
            }
        </div>
    );
}

export default PlacesList;