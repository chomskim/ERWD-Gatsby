import './src/styles/global.css'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { AuthProvider } from './src/context/auth-context'
import webVitals from './src/utils/web-vitals'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === 'blue' ? 'blue' : 'white')};
  }
`

webVitals()

export const wrapPageElement = ({ element }) => {
  return (
    <AuthProvider>
      <GlobalStyle />
      {element}
    </AuthProvider>
  )
}
