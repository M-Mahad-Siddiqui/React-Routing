import './App.css'
import DigitalClock from './components/DigitalClock'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Component1 from './useContext/Component1'
import StopWatch from './useRef/StopWatch'
import UseRef from './useRef/UseRef'

function App() {

  return (
    <>
      <Example1 />
      <Example2 />
      <DigitalClock />
      <Component1 />
      <UseRef />
      <StopWatch/>
    </>
  )
}

export default App
