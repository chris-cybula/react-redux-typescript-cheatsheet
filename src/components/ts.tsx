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

const Functions = () => {
  const sum = (x:number, y:number): number  => {
    return x + y;
  };

  const string = (username: string, points: number): string => {  
    return `${ username } ${ points }`;  
  };

  return (
    <>
      <h1>Functions</h1>
      <p>{sum(1, 2)}</p>
      <p>{string('Chris', 100)}</p>
    </>
  )
}

interface Items {
  number: number
  string: string
}

const Props: React.FC<Items> = ({ number, string }) => {
  
  return (
    <>
      <h1>Props</h1>
      <p>{number}</p>
      <p>{string}</p>
    </>
  )
}

export default () => {
  return (
    <>
      <Variables />
      <Functions />
      <Props number={100} string={"Chris"} />
    </>
  )
}



