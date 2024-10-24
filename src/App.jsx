import { useState } from 'react'
import image from './assets/image.png'
import './App.css'

function App() {
  
  const [value0, setValue0] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleValue0Change = (e) => {
    setValue0(e.target.value);
  };

  const handleValue1Change = (e) => {
    setValue1(e.target.value);
  };

  const handleValue2Change = (e) => {
    setValue2(e.target.value);
  };

  const handleSliderRelease = (sliderNumber) => {
    console.log('generating', value0, value1, value2);
  };

  return (
    <>
      <h1>Font Visualizer</h1>

      <div className="container">

      <div className="image-container">
        <img src={image} alt="image" />
      </div>

      <div className="sliders">
        <label>index 0: {value0}%</label>
        <input type="range" min="-400" max="400" value={value0} onChange={handleValue0Change} onMouseUp = {handleSliderRelease} />
        <label>index 1: {value1}%</label>
        <input type="range" min="-400" max="400" value={value1} onChange={handleValue1Change} onMouseUp = {handleSliderRelease} />
        <label>index 2: {value2}%</label>
        <input type="range" min="-400" max="400" value={value2} onChange={handleValue2Change} onMouseUp = {handleSliderRelease} />
      </div>

      </div>

      <button className="random-image-button">pick new symbol</button>
    </>
  )
}

export default App
