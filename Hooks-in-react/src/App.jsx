import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';


function App() {

  return (
    <>
      {
        <FindToDo />
      }
    </>
  )
}

function FindToDo() {
  const [toDoList, setToDoList] = useState([]);
  const [target, setTarget] = useState("");
  function handleOnChange(e) {
    setTarget(parseInt(e.target.value));
  }
  const url = `https://sum-server.100xdevs.com/todo?id=${target}`;
  async function getData() {
    const data = await axios(url)
    console.log(data);
    setToDoList(data.data.todo)
  }
  useEffect(() => {
    getData();
  }, [target]);
  return (
    <>
      <span>Search Todo</span>
      <input onChange={handleOnChange}></input>
      <h1>{toDoList?.title}</h1>
      <p>{toDoList?.description}</p>
    </>
  )
}

export default App

function ToDo({ props }) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </>
  )
}
