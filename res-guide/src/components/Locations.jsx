import ResInfo from './ResInfo';
import Ratings from './Ratings';
import Button from './Button';

function Locations() {
  return (
    <div className="location-container">
        <h2 className="locations">Pick Your Location</h2>
        <Button name="Theme Park Entrance"/>
        <Button name="Safari Park"/>
        <Button  name="Magic Kingdom"/>
        <ResInfo />
        <Ratings />

    </div>
  )
}

export default Locations

//map restaurants