//map over restaurants


const Restaurant = (props) => {
  return (
    <div className="res-name" placeholder="Restaurant Name">
      <div>
        {props.name}
      </div>
    </div>
  )
}

export default Restaurant
