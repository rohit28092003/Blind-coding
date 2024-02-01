import React from 'react'
import { useTimer } from 'react-timer-hook';
import { RxLapTimer } from "react-icons/rx";


function MyTimer({ expiryTimestamp }) {
   
    const {
      totalSeconds,
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  
    return (
      <div >
        {/* <h1>react-timer-hook </h1>
        <p>Timer Demo</p> */}
        <div >
         <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        {/* <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button> */}
        {/* <button onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time)
        }}>Restart</button> */}
      </div>
      
    );
  }
  
  
const Timer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 3*1200); // 10 minutes timer
    return (
        <div className='timer'>
        <div className='icon'>
        <RxLapTimer  size={25}/>
        </div>
    
        <MyTimer expiryTimestamp={time} />
      
      </div>
    );
}

export default Timer

