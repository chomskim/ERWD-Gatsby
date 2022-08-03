import './src/styles/global.css'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import webVitals from './src/utils/web-vitals'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === 'blue' ? 'blue' : 'white')};
  }
`
export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)

webVitals()
