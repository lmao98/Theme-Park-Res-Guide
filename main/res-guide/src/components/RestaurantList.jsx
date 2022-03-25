import Restaurant from "./Restaurant"
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
        setRestRating()
   
      }

    //   //splice at space
      const setRestRating = async () => {
        targetQuery = ratingTarget.split(' ')[1]
        const res = await axios.post(`http://localhost:3001/rating/${targetQuery}/${newRating}`)
        console.log(res.data.ratings)
       
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