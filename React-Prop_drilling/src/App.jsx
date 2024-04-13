import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </>
  )
}



function Count() {
  return (
    <>
      <CountRenderer />
      <Button />
    </>


  )
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return (
    <>
      <div>{count}</div>
    </>
  )
}

function Button() {
  const { setCount } = useContext(CountContext);
  return (
    <>
      <button onClick={() => {
        setCount((count) => parseInt(count) + 1)
      }}>Increase Me!</button><br />
      <button onClick={() => {
        setCount((count) => parseInt(count) - 1)
      }}>Decrease Me!</button><br />
    </>
  )
}

export default App
