//map over restaurants
import React from "react"
import { useEffect } from 'react'

const Restaurant = (props) => {
  
  useEffect(() => {
    console.log(props)
  }, [])


  return (
    <div className="res-name">Restaurant name:
      <div>
  
      </div>
      
    </div>
  ) 
  
}

export default Restaurant
