import React  from 'react';

const Container = ( props ) => { 
  
  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      height:'100vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection:'column'
    }}>{props.children} 
    </div>
  );
}; 

export default Container;