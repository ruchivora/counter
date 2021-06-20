import React, {useState} from 'react' ;

import Button from './components/Button';
import Container from './components/Container';


const App = () =>{
	let [counter,setCount] = useState( 2 ) ;
	return (
		<Container>
			<h1>Click Counter</h1>  
			<h2 style={{ fontSize:'72px'}}>{counter}</h2>
      <div style={{display:"flex"}}>
        <Button text = '+' onClick = { () => {setCount(counter+1) } } >  </Button>
        <Button text = '-' onClick=  { () => { setCount(counter - 1) } }></Button>
      </div>
			<Button text = 'RESET' onClick= { () => { setCount(0) } }>       </Button>
		</Container>
	)
}

export default App ;
