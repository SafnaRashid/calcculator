
import { useState } from 'react';
import './App.css'
useState
function App() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'Clear') {
      setDisplay(''); 
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString()); 
      } catch (err) {
        setDisplay('Error'); 
      }
    } else {
      setDisplay((prev) => prev + value); 
    }
  };




  return (
    <>
      <div className='container body'>
        <div className='text-center mb-4 calc'>
          <h3>Calculator</h3>
          {/* display */}
          <input className='display'  value={display}  type="text"  placeholder='0' readOnly/>

          <div className='row g-2 mt-4 '>

            <div className='col-3'><button  onClick={() => handleButtonClick('7')} className='btn btn-warning text-black'>7</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('8')} className='btn btn-warning text-black'>8</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('9')} className='btn btn-warning text-black'>9</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('/')} className='btn btn-warning text-black'>/</button></div>

            <div className='col-3'><button onClick={() => handleButtonClick('4')} className='btn btn-warning text-black'>4</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('5')} className='btn btn-warning text-black'>5</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('6')} className='btn  btn-warning text-black'>6</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('*')} className='btn btn-warning  text-black'>*</button></div>

            <div className='col-3'><button onClick={() => handleButtonClick('1')} className='btn btn-warning text-black'>1</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('2')} className='btn btn-warning text-black'>2</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('3')} className='btn  btn-warning text-black'>3</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('-')} className='btn  btn-warning text-black'>-</button></div>

            <div className='col-3'><button onClick={() => handleButtonClick('0')} className='btn  btn-warning text-black'>0</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('Clear')} className='btn btn-warning  text-black'>Clear</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('+')} className='btn btn-warning text-black'>+</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('=')} className='btn btn-warning text-black'>=</button></div>

  


          </div>  
          </div>
      </div>
    </>
  )
}
export default App

