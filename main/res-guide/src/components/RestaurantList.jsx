import Restaurant from "./Restaurant"
import { useState } from 'react'

import axios from "axios"

const RestaurantList = (props) => {

    let ratingTarget = ''
    let newRating = ''
    let targetQuery = ''

    const enterRating = (e) => {
        console.log('clicked')
        let rate = prompt('enter your rating!')
        newRating = rate
        ratingTarget = (e.target.innerHTML)
        // console.log(e.target.innerHTML)
        // console.log(ratingTarget)
        setRestRating()
      }

      const setRestRating = async () => {
        targetQuery = ratingTarget.replace(/\s+/g, '');
        const res = await axios.post(`http://localhost:3001/rating/${targetQuery}/${newRating}`)
        console.log(res.data)
      }

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
                    rateRest={enterRating}
                    />

                ))
                }
            </ul>
        </div>
    )
}

export default RestaurantList