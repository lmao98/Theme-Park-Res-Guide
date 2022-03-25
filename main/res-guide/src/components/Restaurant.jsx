import { useState } from 'react'


const Restaurant = (props) => {

                    
  return (
    <div className="res-name" placeholder="Restaurant Name">
      <div>
        <li>
          <button className='set-rating' onClick={props.rateRest}> { props.name } </button>
          <h3>Vibe: { props.vibe } </h3>
          <h3>Rating: { props.ratings } </h3>
        </li>
      </div>
    </div>
  )
}

export default Restaurant
