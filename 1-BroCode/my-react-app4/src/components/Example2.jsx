// we can also do this by using onChange but its not a good practice because it run soo many times when we resize

import React from 'react';

export default function Example2() {

  const [windowWidth, setWindowWidth]   = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      return () => {  // clean up function unmounting
        window.removeEventListener('resize', handleResize);
      }
    }
    window.addEventListener('resize', handleResize);
  }, [])

  React.useEffect(() => {
  document.title = `window width ${windowWidth} px and height ${windowHeight} px`;
  }, [windowWidth, windowHeight])

  return (
    <div>
      <p>Window width : {windowWidth} px</p>
      <p>Window height: {windowHeight} px</p>
    </div>
  )
}
