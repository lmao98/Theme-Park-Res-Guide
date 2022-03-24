

const Button1 = (props) => {
    return (
      <div>
          <button className="btn" onClick={props.handleClick1}>{props.name} </button>
      </div>
    )
  }
  
  export default Button1