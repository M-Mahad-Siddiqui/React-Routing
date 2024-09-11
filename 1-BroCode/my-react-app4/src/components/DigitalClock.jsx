import React from 'react';

export default function DigitalClock() {


    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); // empty dependency array means this effect runs once after the initial render and does not re-run on subsequent renders
    
    function formatTime() {
        let   hours    = time.getHours();
        const minutes  = time.getMinutes();
        const seconds  = time.getSeconds();
        const meridian = hours >= 12 ? 'PM' : 'AM';
        hours    = hours % 12 || 12;
              
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridian)} `
    }

    function padZero(num) {
        return (num < 10 ? '0' : '') + num.toString();
    }

    const clockStyle = {
        fontSize  : '2rem',
        color     : 'blue',
        textShadow: '0 0 10px rgba(10, 122, 200, 0.9)',
        fontWeight: 'bold',
        padding   : '10px'
  }

  return (
      <div className = 'clock-container' style={clockStyle}>
      <div className = "clock">
            <span>{formatTime()}</span>
          </div>
    </div>
  )
}



// import React from 'react';
// export default function DigitalClock() {
//     const [time, setTime] = React.useState(new Date());

//     React.useEffect(() => {
//         const interval = setInterval(() => {
//             setTime(new Date());
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);

//     function formatTime(date) {
//         let hours = date.getHours();
//         const minutes = padZero(date.getMinutes());
//         const seconds = padZero(date.getSeconds());
//         const meridian = hours >= 12 ? 'PM' : 'AM';
        
//         // Convert hours from 24-hour format to 12-hour format
//         hours = hours % 12 || 12; // Handle 0 as 12

//         return `${hours}:${minutes}:${seconds} ${meridian}`;
//     }

//     function padZero(num) {
//         return num.toString().padStart(2, '0');
//     }

//     return (
//         <div>
//             <h1>Digital Clock</h1>
//             <p>{formatTime(time)}</p>
//         </div>
//     );
// }
