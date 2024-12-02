import "./style.css"

// eslint-disable-next-line react/prop-types
function Button( { text, onBtnClick, outLined } ) {

  return (
    <div className={outLined ? "outlined-btn" : "btn"} onClick = {() => onBtnClick()}>
        {text}
    </div>
  )
}

export default Button