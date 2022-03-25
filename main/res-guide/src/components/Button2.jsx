

const Button2 = (props) => {
    return (
      <div>
          <button className="btn" onClick={props.handleClick2}>{props.name} </button>
      </div>
    )
  }
  
  export default Button2