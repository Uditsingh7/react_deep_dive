import { useEffect, useState } from 'react'
import React from 'react';
import './App.css'
import Header from './Header'
import ToDo from './ListToDo';
const url = "https://sum-server.100xdevs.com/todos";


function App() {
  // const [randomNum, setRandomNum] = useState("");
  const [toDoList, setToDoList] = useState([]);
  async function toGetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    setToDoList(data.todos);
  }
  useEffect(() => {
    // setInterval(() => {
      toGetData();
    // }, 5000)
  }, [])

  function addToDo() {
    setToDoList([...toDoList, {
      id: toDoList.length + 1,
      title: `Task ${toDoList.length + 1}`,
      description: "New Hunt"
    }])
  }
  // function handleClick() {
  //   let num = Math.floor(Math.random() * 100) + 1;
  //   setRandomNum(num);
  // }
  return (
    <div>
      {/* <HeaderWithButton></HeaderWithButton> */}
      <button onClick={addToDo}>Add Cohort!</button>
      <ToDo toDoList={toDoList} />
      {/* <CardWrapper innerComponent={TextComponent}></CardWrapper> */}

      {/* <CardWrapper>
        <h1>Random Number Generator</h1>
      </CardWrapper>
      <h1>------------------------------</h1>
      <CardWrapper>
        <TextComponent />
      </CardWrapper> */}

      {/* <Header title={`Max Marshal ${randomNum}`} />
      <Header title="React Deep Dive 2.0" />
      <Header title="React Deep Dive 2.0" />
      <Header title="React Deep Dive 2.0" />
      <Header title="React Deep Dive 2.0" />
      <Header title="React Deep Dive 2.0" />
      <Header title="React Deep Dive 2.0" /> */}
    </div>
  )
}

function TextComponent() {
  return <div>
    Burn the world
  </div>
}

function CardWrapper({ children }) {
  return (
    <>
      <div style={{ border: "4px double black", fontSize: "16px", padding: "10px", width: "300px", height: "200px" }}>
        {children}
      </div>
    </>
  )

}
export default App


function HeaderWithButton() {
  const [randomNum, setRandomNum] = useState("");
  function handleClick() {
    let num = Math.floor(Math.random() * 100) + 1;
    setRandomNum(num);
  }
  return (
    <>
      <button onClick={handleClick}>Add Cohort!</button>
      <div className="header">
        <h1>{`Joker ${randomNum}`}</h1>
      </div>
    </>
  )
}
