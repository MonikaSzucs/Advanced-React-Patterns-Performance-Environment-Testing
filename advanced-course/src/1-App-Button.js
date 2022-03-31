import logo from './logo.svg';
import './App.css';
import {useState, setCounter} from 'react';

const Button = (props) => {
  const [count, setCounter] = useState(0);

  return <div style={{ 
      color: props.color,
      textDecoration: props.underline ? 'underline' : undefined
    }} onClick={() => setCounter((c) => c + 1)}>I am a button {count}</div>
}


function App() {

  const props = {
    increment: 2, 
    underline: true,
    color: 'black'
  }

  // JSX code gets convereted to React.createElement()
  return (
    <div className="App">
      <Button {...props} color="black"/>
      <Button {...props} underline={true} color="blue"/>
      {/* If you write teh {...props} after the color then it will get over written with the black in the const above*/}
      <Button  underline={true} color="green" {...props}/>
    </div>
  );
}

export default App;
