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

  function clicked(data) {
    setState('loading')
    fetch('/data.json').then(() => {
      //run this line below if you want to see an error show up when you click on the div
      JSON.parse(data)
      setState('loaded')
    }).catch(err => {
      setState('error')
    })
  }

  if (state === 'loading') {
    return <div>Loading...</div>
  }
  if (state === 'error') {
    return <div>Error fetching your request.</div>
  }

  // JSX code gets convereted to React.createElement()
  return (
    <div className="App" onClick={clicked}>
      Current state: {state}
    </div>
  );
}

export default App;
