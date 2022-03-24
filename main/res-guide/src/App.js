import './App.css';
import React from 'react'
import Header from './components/Header';
import Locations from './components/Locations';
import axios from 'axios'
import { useState } from 'react'


function App() {
  
  const [locations, setLocations] = useState([])

  
  

  const getLocations = async () => {
    const res = await axios.get('http://localhost:3001/locations')
     setLocations(res.data)
     console.log(locations)
  }

  const handleClick = () => {
    console.log('clicked')
    getLocations()
  }   

  const getRestaurants = async () => {
    const res = await axios.get('http://localhost:3001/restaurants')
     console.log(res.data)
  }
  
  getRestaurants()

  return (
    <div className="App">
      <Header />
      <Locations 
       handleClick={handleClick}
       getLocations={getLocations}
      />
      
    </div>
  );
}

export default App;
