import React, { useState, useEffect } from "react"

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

const App = () => {
  const test: number = 66

  const fun = () => {
    return `${test}`
  }

  return (
    <>
      <div>{fun()}</div>
      <Component number={12} string={"12345"} />
      <Component2 />
    </>
  )
}

export default App



















