import './App.css';
import React from 'react'
import Header from './components/Header';
import Locations from './components/Locations';
import axios from 'axios'
import { useState } from 'react'
import RestaurantList from './components/RestaurantList';


function App() {
  
  
  const [ restaurant, setRestaurant ] = useState([])
  
  const getRestaurants1 = async () => {
    const res = await axios.get('http://localhost:3001/restaurants/623c98e8e331e255b1c5ba0f')
     console.log(res.data)
     setRestaurant(res.data)
  }


  const handleClick = () => {
    console.log('clicked')
    getRestaurants()
  }   
  

  const handleClick1 = () => {
    console.log('clicked')
    getRestaurants1()
  }   

  const handleClick = () => {
    console.log('clicked')
    getRestaurants()
  }   

  const getRestaurants = async () => {
    const res = await axios.get('http://localhost:3001/restaurants/623c98e8e331e255b1c5ba10')
     console.log(res.data)
  }
  
  

  return (
    <div className="App">
      <Header />
      <Locations
       getRestaurants={getRestaurants}
       handleClick={handleClick}
       handleClick1={handleClick1}
       restaurant={restaurant}
      />
      <RestaurantList rest={rest}/>    
    </div>
  );
}

export default App;
