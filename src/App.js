import React, {useState} from 'react';
import './App.css';
import List from './List';
import Details from './Details';

function App() {
  const [info, setInfo] = useState({});
  return (
    <div className="App">
      <List setInfo={setInfo} />
      <Details info={info} />
    </div>
  );
}

export default App;
