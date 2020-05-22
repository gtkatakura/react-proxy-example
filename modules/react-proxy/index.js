import React from 'react'

const original = React.createElement

const createElement = (type, props, ...children) => {
  return original(
    type,
    { ...props, injected: true },
    ...children,
  )
}

Object.assign(React, { createElement })

export default React

export * from 'react'
