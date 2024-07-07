import React, {useState} from 'react'
import axios from 'axios'

function App() {

  const url ='https://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=7385a61555191dc559d508832b1685cd'
  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Tunis</p>
          </div>
          <div className='temp'>
            <h1> 75°F</h1>
          </div>
          <div className='description'>
            <p>clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>70°F</p>
          </div>
          <div className='humidity'>
            <p>10%</p>
          </div>
          <div className='wind'>
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
