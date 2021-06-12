import React, {useState} from 'react' ;

import Button from './Button';

const App = () =>{
	let [counter,setCount] = useState( 2 ) ;
	return (
		<div>
			<h1>Click Counter</h1>  
			<h2>{counter}</h2>
			<Button text = '+' buttonClick = { () => {setCount(counter+1) } } >  </Button>
			<Button text = '-' buttonClick=  { () => { setCount(counter - 1) } }></Button>
			<Button text = 'RESET' buttonClick= { () => { setCount(0) } }>       </Button>
		</div>
	)
}

export default App ;
