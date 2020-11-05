import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setData } from "../state/actions/setData"
import { store } from "../state/store"
import { State } from "../state/reducers/reducer"
import Variables from "../components/ts/Variables"

interface Items {
  number: number
  string: string
}

const Component: React.FC<Items> = ({ number, string }) => {
  interface User {
    name: string
  }

  const [user, setUser] = useState<User>({ name: "Chris!" })

  const funTest = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    setUser({ name: "something" })
    alert(event.currentTarget)
  }

  return (
    <>
      <p>{number}</p>
      <p>{string}</p>
      <p>{user.name}</p>
      <button onClick={funTest}>button</button>
    </>
  )
}

const Component2 = () => {
  let myAdd = (x:number, y:number)  => {
    return x + y;
  };

  myAdd(1, 12)

  return <p>asdsdf</p>
}

const Component3 = () => {
  const dispatch = useDispatch() 
  const state = useSelector((state: State) => state["reducer"])

  console.log('state', state.data) 

  const setState = () => {  
    dispatch(setData('Chris'))
  }

  const getState = () => {  
    var newState = store.getState();

    if(newState.reducer.data === "") {
      alert("State is empty")
    } else {
      alert(newState.reducer.data)
    }
  }

  return (
    <>
      <button onClick={setState}>set state</button>
      <button onClick={getState}>get state</button>
    </>
  )  
}

const App = () => {
  // const test: number = 66

  // const fun = () => {
  //   return `${test}`
  // }

  return (
    <>
      <Variables />
      {/* <div>{fun()}</div> */}
      {/* <Component number={12} string={"12345"} />
      <Component2 />
      <Component3 /> */}
    </>
  )
}

export default App



















