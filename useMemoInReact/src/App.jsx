import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState('');
  function handleClick() {
    console.log("Inside handle click!")
    setCount((c) => c + 1);
  }

  let sum = useMemo(() => {
    let count = 0;
    for (let i = 0; i <= inputValue; i++) {
      count = count + i;
    }
    return count;
  }, [inputValue])

  return (
    <>
      <input type="number" onChange={(e) => {
        setInputValue(e.target.value);
      }} /><br></br>
      <div>Nth Sum of number: {sum}</div>
      <button onClick={handleClick}>{count}</button>
    </>
  )
}

export default App
