import { useState } from 'react'
import React from 'react';
import './App.css'
import Header from './Header'
import ToDo from './ListToDo';


function App() {
  // const [randomNum, setRandomNum] = useState("");
  // const [toDoList, setToDoList] = useState([
  //   {
  //     id: 1,
  //     title: "Bug off",
  //     description: "All of the lights"
  //   },
  //   {
  //     id: 2,
  //     title: "Jug of war",
  //     description: "My beautiful dark twisted fantasy"
  //   },
  //   {
  //     id: 3,
  //     title: "run away",
  //     description: "Home sweet home"
  //   },
  // ])
  // function handleClick() {
  //   let num = Math.floor(Math.random() * 100) + 1;
  //   setRandomNum(num);
  // }
  // function addToDo() {
  //   setToDoList([...toDoList, {
  //     id: toDoList.length + 1,
  //     title: `Task ${toDoList.length + 1}`,
  //     description: "New Hunt"
  //   }])
  // }
  return (
    <div>
      {/* <HeaderWithButton></HeaderWithButton> */}
      {/* <button onClick={addToDo}>Add Cohort!</button>
      <ToDo toDoList={toDoList} /> */}
      <CardWrapper innerComponent={TextComponent}></CardWrapper>

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

function CardWrapper({ innerComponent: TextComponent }) {
  return (
    <>
      <div style={{ border: "4px double black", fontSize: "16px", padding: "10px" }}>
        <TextComponent />
      </div>
      <div style={{ border: "4px double black", fontSize: "16px", padding: "10px" }}>
        <TextComponent />
      </div>
      <div style={{ border: "4px double black", fontSize: "16px", padding: "10px" }}>
        <TextComponent />
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
