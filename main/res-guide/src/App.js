import './App.css';
import React from 'react'
import Header from './components/Header';
import Locations from './components/Locations';
import axios from 'axios'
import { useState } from 'react'


function App() {
  
  const [locations, setLocations] = useState([])

  
  const getRestaurants1 = async () => {
    const res = await axios.get('http://localhost:3001/restaurants/623c98e8600a9861f45fd1d9')
     console.log(res.data)
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
    const res = await axios.get('http://localhost:3001/restaurants/623c98e8600a9861f45fd1d8')
     console.log(res.data)
  }
  
  

  return (
    <div className="App">
      <Header />
      <Locations
       handleClick={handleClick}
       getRestaurants={getRestaurants}
       handleClick1={handleClick1}
      />
      
    </div>
  );
}

export default App;
