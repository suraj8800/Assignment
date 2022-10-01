import React  from 'react';
import BarChart from './Components/BarChart';
import ScatterChart from './Components/ScattreChart';

function App() {
  return (
    <>
    <div className='ScatterChart'>
      <ScatterChart></ScatterChart>
    </div>
    <div className='BarChart'>
      <BarChart></BarChart>
    </div>
    </>
  );
}

export default App;
