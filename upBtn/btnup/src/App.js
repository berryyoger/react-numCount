import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [num, numUp] = useState(0)

  return (
    <body>
      <button className='btn' id='1' onClick={()=>{numUp(num + 1)}}> {num} + 1</button>
      <button className='btn' id='2' onClick={()=>{numUp(num * 0)}}> {num} × 0</button>
      <button className='btn' id='3' onClick={()=>{numUp(num - 1)}}> {num} - 1</button>
    </body>
  );
}

export default App;
