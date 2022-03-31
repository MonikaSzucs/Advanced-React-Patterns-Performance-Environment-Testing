import logo from './logo.svg';
import './App.css';
import {useState, useReducer} from 'react';

function reducer({state}) {
  switch(state){
    case 'PRESSED_ONCE':
      return {
        state: 'PRESSED_TWO'
      }
      case 'PRESSED_TWO':
        return {
          state: 'PRESSED_THREE'
        }
        case 'PRESSED_THREE':
          return {
            state: 'PRESSED_ONCE'
          }
  }
}

const Button = (props) => {
  const [count, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    state: 'PRESSED_ONCE'
  })

  return <div style={{ 
        color: props.color,
        textDecoration: props.underline ? 'underline' : undefined
      }} 
    >
      <div onClick={() => dispatch()}>I am a button {count}</div>
      <div>{state.state}</div>
    </div>
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
