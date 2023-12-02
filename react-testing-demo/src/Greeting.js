import React from 'react'

export const Greeting = ({name = 'Guest'}) => {
  return (
    <h1>
        Hello, {name}!
    </h1>
  )
}
