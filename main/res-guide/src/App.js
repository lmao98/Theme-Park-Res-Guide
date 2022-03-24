import './App.css';
import React from 'react'
import Header from './components/Header';
import Locations from './components/Locations';
import axios from 'axios'
import { useState } from 'react'
import Restaurant from './components/Restaurant';
import Ratings from './components/Ratings'


function App() {
  
  const [rest, setRes] = useState([])



  const getRestaurants = async () => {
    const res = await axios.get('http://localhost:3001/restaurants/623c7b12cd8760ede3c8fb6c')
    setRes(res.data)
  }
  
  
  const getRestaurants1 = async () => {
    const res = await axios.get('http://localhost:3001/restaurants/623c7b12cd8760ede3c8fb6b')
    setRes(res.data)
  }


  const handleClick = () => {
    console.log('clicked')
    getRestaurants()
  }   
  

  const handleClick1 = () => {
    console.log('clicked')
    getRestaurants1()
  }   


  
  

  return (
    <div className="App">
      <Header />
      <Locations
       handleClick={handleClick}
       getRestaurants={getRestaurants}
       handleClick1={handleClick1}
      />
      <Restaurant name={rest.name}/>
      <Ratings 
      vibe={rest.vibe}
      ratings={rest.ratings}/>
      
    </div>
  );
}

export default App;
