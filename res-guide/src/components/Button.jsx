

const Button = (props) => {
  return (
    <div>
        <button className="btn" onClick={props.handleClick}>{props.name} </button>
    </div>
  )
}

export default Button