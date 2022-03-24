//map over restaurants


const Restaurant = (props) => {
  return (
    <div className="res-name" placeholder="Restaurant Name">
      <div>
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}

export default Restaurant
