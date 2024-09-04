                //errors hy but nennd a rahi hy fixed kr lyna

import React from 'react';

export default function DigitalClock() {


    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []); // empty dependency array means this effect runs once after the initial render and does not re-run on subsequent renders
    
    function formatTime() {
        let   hours    = time.getHours();
        const minutes  = time.getMinutes();
        const seconds  = time.getSeconds();
        const meridian = hours >= 12 ? 'PM' : 'AM';
              hours    = hours % 12;
              //   hours    = hours ? hours : 12;          // the hour '0' should be '12'
              
        return `${hours}:${minutes}:${seconds} ${meridian}`
    }

    function padZero(num) {
        return num.toString().padStart(2, '0');
    }

  return (
      <div>
          <h1>Digital Clock</h1>
          <p>{new Date().toLocaleTimeString()}</p>
          <p>{formatTime()}</p>
    </div>
  )
}
