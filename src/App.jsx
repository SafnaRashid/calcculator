
import { useState } from 'react';
import './App.css'
useState
function App() {
  const [input, setInput] = useState(''); // State to manage the display value

  const handleClick = (value) => {
    if (value === 'Clear') {
      setInput('');
    } else if (value === '=') {
      try {
        // Evaluate the expression (using eval cautiously)
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value); // Append the clicked value
    }
  };



  return (
    <>
      <div className='container body'>
        <div className='text-center mb-4 calc'>
          <h3>Calculator</h3>
          {/* display */}
          <input className='display' type="text"  placeholder='0' readOnly/>

          <div className='row g-2 mt-4 '>

            <div className='col-3'><button  onClick={() => handleClick()} className='btn btn-warning text-black'>7</button></div>
            <div className='col-3'><button className='btn btn-warning text-black'>8</button></div>
            <div className='col-3'><button className='btn btn-warning text-black'>9</button></div>
            <div className='col-3'><button className='btn btn-warning text-black'>/</button></div>

            <div className='col-3'><button className='btn btn-warning text-black'>4</button></div>
            <div className='col-3'><button className='btn btn-warning text-black'>5</button></div>
            <div className='col-3'><button className='btn  btn-warning text-black'>6</button></div>
            <div className='col-3'><button className='btn btn-warning  text-black'>*</button></div>

            <div className='col-3'><button className='btn btn-warning text-black'>1</button></div>
            <div className='col-3'><button className='btn btn-warning text-black'>2</button></div>
            <div className='col-3'><button className='btn  btn-warning text-black'>3</button></div>
            <div className='col-3'><button className='btn  btn-warning text-black'>-</button></div>

            <div className='col-3'><button className='btn  btn-warning text-black'>0</button></div>
            <div className='col-3'><button className='btn btn-warning  text-black'>Clear</button></div>
            <div className='col-3'><button className='btn btn-warning text-black'>+</button></div>
            <div className='col-3'><button className='btn btn-warning text-black'>=</button></div>

            {/* <div className='col-12 equal'><button className='btn'></button></div> */}


          </div>  
          </div>
      </div>
    </>
  )
}

export default App
