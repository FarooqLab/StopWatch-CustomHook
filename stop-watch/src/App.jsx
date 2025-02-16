import React from 'react'
import './index.css'
import useStopWatch from './useStopWatch'
const App = () => {
  const {seconds,minutes,hours,start,stop,restart}=useStopWatch();
  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">Stop Watch </h1>
      <h2 className="time-display">{`${hours}:${minutes}:${seconds}`}</h2>
      <div className="buttons">    
      <button className="stop-btn" onClick={start}>Start</button>
      <button className="stop-btn" onClick={stop}>Stop</button>
      <button className="restart-btn" onClick={restart}>Restart</button>
      </div> 
    </div>
  )
}

export default App