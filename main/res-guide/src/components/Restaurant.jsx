//map over restaurants


const Restaurant = (props) => {
  return (
    <div className="res-name" placeholder="Restaurant Name">
      <div>
        <li>
          <h3> { props.name } </h3>
          <h3>Vibe: { props.vibe } </h3>
          <h3>Rating: { props.ratings } </h3>
        </li>
      </div>
    </div>
  )
}

export default Restaurant
