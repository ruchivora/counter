import React from 'react' ;

const Button = (props) => {
  return <button onClick = { () => {props.buttonClick()} }> {props.text}</button>
}

export default Button ;