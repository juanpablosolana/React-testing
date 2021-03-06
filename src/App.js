import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const newColor =color === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button style={{backgroundColor: color}}
      onClick={()=>setColor(newColor)}>
        Change to {newColor}
      </button>
      <input type="checkbox" checked={color === 'blue'} onChange={()=>setColor(color === 'blue' ? 'red' : 'blue')}/>
    </div>
  );
}

export default App;
