import React from "react"
import { Provider } from "react-redux"
import { store } from "./src/state/store"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #35363A;
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 300;   
  }

  h1 {
    font-size: 1rem;
  }
`

export const wrapRootElement = ({ element }) => {
  return (
    <>
    <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Provider store={store}>{element}</Provider>
    </>
  )
}
