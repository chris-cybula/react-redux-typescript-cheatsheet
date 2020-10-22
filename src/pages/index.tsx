import React, {useState} from "react"

interface Items {
  number: number
  string: string
}

const Component: React.FC<Items> = ({ number, string }) => {
  interface User {
    name: string;
  }

  const [user, setUser] = useState<User>({name: 'Chris!'})

  const funTest = () => {
    setUser({name: 'something'})
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

const App = () => {
  const test: number = 66

  const fun = () => {
    return `${test}`
  }

  return (
    <>
      <div>{fun()}</div>
      <Component number={12} string={"12345"} />
    </>
  )
}

export default App
