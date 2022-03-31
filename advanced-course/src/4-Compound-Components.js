import './App.css';

const Checkbox = ({ children }) => {
  return(
    <div>{children}</div>
  )
}

const CheckboxInput = () => {
  return <input type="checkbox" />
}

const Label = ({ children }) => {
  return <label for="something">{children}</label>
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
