import React from 'react' ;

const Button = (props) => {

  const { text , onClick } = props ;

  return <button onClick = { () => {onClick()} } style = {{
    border:'none',
    fontWeight: 'bold',
    margin:'5px',
    padding:'8px 20px',
    backgroundColor:'#222',
    color:'#fff',
    borderRadius:'5px',
    boxShadow:'0 6px #555',

  }}> {text}</button>
}

export default Button ;