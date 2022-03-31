import logo from './logo.svg';
import './App.css';
import {useState, useReducer, useEffect} from 'react';

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


// *
// * idle
// * loading
// * loaded
// * error

function App() {

  const [state, setState] = useState('idle')

  useEffect(() => {
    setState('loading')
    fetch('/data.json').then(() => {
      setState('loaded')
    }).catch(err => {
      setState('error')
    })
  }, [])

  // JSX code gets convereted to React.createElement()
  return (
    <div className="App">
      Current state: {state}
    </div>
  );
}

export default App;
