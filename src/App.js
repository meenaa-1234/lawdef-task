import React from 'react';
import './App.css';
import Homepage from './components/HomePage/HomePage';
import Lawdef1 from './components/HomePage/Lawdef1';
import Lawdef2 from './components/HomePage/Lawdef2';
import Lawdef3 from './components/HomePage/Lawdef3';
import Lawdef4 from './components/HomePage/Lawdef4';
import Lawdef5 from './components/HomePage/Lawdef5';

 function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Demo /> */}
      <Lawdef1 /><br/>
      <Lawdef2 /><br/><br />
      <Lawdef3 /><br/>
      <Lawdef4 />
      <Lawdef5 />

    </div>
  );
}
export default App;
