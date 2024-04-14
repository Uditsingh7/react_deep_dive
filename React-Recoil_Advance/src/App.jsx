import { useState, useEffect } from 'react'
import { useRecoilValue, RecoilRoot, useSetRecoilState, useRecoilValueLoadable } from 'recoil';
// import { networkAtom, notificationsAtom, messagesAtom, jobsAtom, totalHeaderSelector } from './atom'
import './App.css'
import { notificationAtom, totalNetworkSelector } from './atomAdvance';
import { toDosAtomFamily } from './atomFamily';
import { toDoSelectorFamily } from './atomSelectorFamily';

function App() {
  return (
    <>
      <RecoilRoot>
        {/* <MainApp /> */}
        {/* <UpdateTODOComponent /> */}
        <TODOSelector id={1} />
        <TODOSelector id={2} />
        <TODOSelector id={3} />
      </RecoilRoot>
    </>
  )
}

function UpdateTODOComponent() {
  const updateTodo = useSetRecoilState(toDosAtomFamily(1))

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: 1,
        title: "Updated TODO title",
        description: "See you in Hell"
      })
    }, 5000);
  })
  return (
    <></>
  )
}

function MainApp() {
  // const networkAtomCount = useRecoilValue(networkAtom)
  // const jobsAtomCount = useRecoilValue(jobsAtom)
  // const notificationAtomCount = useRecoilValue(notificationsAtom)
  // const messageAtomCount = useRecoilValue(messagesAtom)
  // const totalHeaderCountSelector = useRecoilValue(totalHeaderSelector)

  const notificationAtomCount = useRecoilValue(notificationAtom);
  const totalNotificationsCount = useRecoilValue(totalNetworkSelector)
  return (
    <>
      <button>Home</button>
      <button>Jobs ({notificationAtomCount.jobs})</button>
      <button>My Network({notificationAtomCount.network > 100 ? "99+" : notificationAtomCount.network})</button>
      <button>Notifications ({notificationAtomCount.notifications > 100 ? "99+" : notificationAtomCount.notifications})</button>
      <button>Messages ({notificationAtomCount.messaging})</button>
      <button>Me ({totalNotificationsCount})</button>

    </>
  )
}


function TODO({ id }) {
  const toDoData = useRecoilValue(toDosAtomFamily(id))
  console.log("TODO Data: ", toDoData, id);
  return (
    <>
      <h1>{toDoData?.title}</h1>
      <h3>{toDoData?.description}</h3>
    </>
  )
}

function TODOSelector({ id }) {
  const toDo = useRecoilValueLoadable(toDoSelectorFamily(id))
  console.log("TODO Data: ", toDo, id);
  if (toDo.state === "loading") {
    return (<div>Loading...</div>)
  }
  else if (toDo.state === "hasValue") {
    return (
      <>
        <h1>{toDo?.contents?.title}</h1>
        <h3>{toDo?.contents?.description}</h3>
      </>
    )
  }
  else if (toDo.state === "hasError") {
    return (
      <div style={{ color: "red" }}>Error while fetching the data.....!</div>
    )
  }
}

export default App
