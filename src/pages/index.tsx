import React from "react"

interface Items {
  number: number
  string: string
}

const Component: React.FC<Items> = ({ number, string }) => {
  return (
    <>
      <p>{number}</p>
      <p>{string}</p>
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
      <Component number={12 } string={"12345"} />
    </>
  )
}

export default App
