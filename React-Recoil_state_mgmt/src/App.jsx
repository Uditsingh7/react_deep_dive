import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
function App() {

  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
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

function Message() {
  const isEven = useRecoilValue(evenSelector);
  return (
    <>
      {isEven ? <div>Count is even</div> : <div>Count is</div>}
    </>
  )
}

function CountRenderer() {

  const count = useRecoilValue(countAtom);
  return (
    <>
      <div>{count}</div>
      <Message />
    </>
  )
}
function Button() {
  // const setCount = useRecoilState(countAtom)[1];
  const setCount = useSetRecoilState(countAtom);
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
