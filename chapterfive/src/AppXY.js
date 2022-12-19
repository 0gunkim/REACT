import React, {useState}  from 'react';
import styled from 'styled-components';

function App() {
  const [position, setPosition] = useState({x: 0, y: 0})
  return (
    <>  
    <Container onMouseMove={(e)=>{
      setPosition((prev) => ({x: e.clientX, y: e.clientY}))
    }}>
    <Mouse style={{transform: `translate(${position.x}px, ${position.y}px)`}} /> 
    </Container>
    </>
  );
}
const Mouse = styled.div`
border-radius: 50%;
width:50px;
height: 50px;
position: absolute;
left: -15px;
top: -15px;
background-color: orange;
`
const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: beige;
`
export default App;
