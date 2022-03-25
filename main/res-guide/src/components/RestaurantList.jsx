import Restaurant from "./Restaurant"
import { useState } from 'react'

const RestaurantList = (props) => {

    let ratingTarget = ''

    const enterRating = (e) => {
        console.log('clicked')
        let rate = prompt('enter your rating!')
        console.log(rate)
        console.log(e.target.innerHTML)
        ratingTarget = (e.target.innerHTML)
        console.log(ratingTarget)
      }

    //   const setRestRating = async () => {
    //     const res = await axios.get(`http://localhost:3001/rating/${ratingTarget}`)
    //     console.log(res.data)
    //     setRest(res.data)
    //   }

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