import React from 'react'
import { navigate } from 'gatsby'

const SomePage = () => {
  const triggerNavigation = () => {
    navigate('/about')
  }
  return (
    <div>
      <p>Triggering page navigation via onClick.</p>
      <button onClick={() => triggerNavigation()}>About Me</button>
    </div>
  )
}

export default SomePage
