import Restaurant from "./Restaurant"


const RestaurantList = (props) => {

    return (
        <div className="list-container">
            <h1>Restaurants</h1>
            <ul>
                { props.rest.map((restItem) => (
                    <Restaurant
                    key={ restItem.name } 
                    name={ restItem.name }
                    vibe={ restItem.vibe }
                    ratings={ restItem.ratings }
                    />
                ))}
            </ul>
        </div>
    )
}

export default RestaurantList