import React from "react"

const App = () => {

  const test: number = 66;

  const fun = () => {
    return `${test}`
  }
  return <div>{fun()}</div>
}

export default App
