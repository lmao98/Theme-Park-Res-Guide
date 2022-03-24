import Ratings from './Ratings';
import Button from './Button';
import Button1 from './Button1';
import Restaurant from './Restaurant';

function Locations(props) {
    
  

  return (
    <div className="location-container">
        <h2 className="locations">Pick Your Location:</h2>
        <Button name="Theme Park Entrance" handleClick={props.handleClick} />
        <Button1 name="Safari Park" handleClick1={props.handleClick1} />
        
        <Restaurant />
        <Ratings />

    </div>
  )
}

export default Locations

//map restaurants