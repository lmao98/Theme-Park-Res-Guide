import Restaurant from "./Restaurant"


const Sidebar = (props) => {

    return (
        <div className="right">
            <h1>Restaurants</h1>
            <ul>
                { props.rest.map((restItem) => (
                    <Restaurant
                    key={ restItem.name } 
                    name={ restItem.name }/>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar