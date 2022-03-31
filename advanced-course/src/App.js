import './App.css';
import {useState} from 'react';

const Checkbox = ({ children }) => {
  return(
    <div>{children}</div>
  )
}

const CheckboxInput = () => {
  const [checked, setChecked] = useState(true)
  return (
    <input 
        type="checkbox" 
        checked={checked} 
        onChange={(e) => {
          setChecked(e.target.checked)
        }}
  />
  )
}

const Label = ({ toggle, children }) => {
  console.log(toggle)
  return <label onClick={toggle}>{children}</label>
}

function App() {
  return (
    <Checkbox>
      <CheckboxInput/>
      <Label>Check box label</Label>
    </Checkbox>
  );
}

export default App;
