import ResInfo from './ResInfo';
import Ratings from './Ratings';
import Button from './Button';

function Locations() {
    
    const handleClick = () => {
        console.log('clicked')
    }

  return (
    <div className="location-container">
        <h2 className="locations">Pick Your Location:</h2>
        <Button name="Theme Park Entrance" onClick={handleClick} handleClick={handleClick}/>
        <Button name="Safari Park" onClick={handleClick} handleClick={handleClick}/>
        <Button  name="Magic Kingdom" onClick={handleClick} handleClick={handleClick}/>
        <ResInfo />
        <Ratings />

    </div>
  )
}

export default Locations

//map restaurants