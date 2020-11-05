import React from "react"

const Variables = () => {
  const variable: number = 100
  const string: string = "string"
  let boolean: boolean = true
  let arr: number[] = [1, 2, 3]

  return (
    <>
      <div>
        <h1>Variables</h1>
        <p>{variable}</p>
        <p>{string}</p>
        <p>{boolean && "true"}</p>
        {arr.map((item, i) => {
          return <p key={i}>{item}</p>
        })}
      </div>
    </>
  )
}


export default () => {
  return (
    <>
      <Variables />
    </>
  )
}



