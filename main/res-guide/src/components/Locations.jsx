import ResInfo from './ResInfo';
import Ratings from './Ratings';
import Button from './Button';

function Locations(props) {
    
  

  return (
    <div className="location-container">
        <h2 className="locations">Pick Your Location:</h2>
        <Button name="Theme Park Entrance" handleClick={props.handleClick} />
        <Button name="Safari Park"  />
        
        <ResInfo />
        <Ratings />

    </div>
  )
}

export default Locations

//map restaurants