import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  //Initialize state with current date to keep track of time updates
  const [time, setTime] = useState(new Date());
  //This block handles starting and stopping of the timer
  useEffect(() => {
    //Sets an alarm, telling the app to update time every one second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    //Stops the alarm once user leaves page, preventing memory leaks
    return () => clearInterval(timer);
  }, []) //The [] keeps it from running more than once
  
  //Display logic
  return (
    <div className='clock-container'>
      <h1>{format(time, 'h:mm:ss a')}</h1>
      <p>{time, format(time, 'EEEE, do MMMM yyyy')}</p>
    </div>
  )
}

export default App
