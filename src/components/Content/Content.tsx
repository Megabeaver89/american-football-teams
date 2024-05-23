import React from 'react'
import './Content.css'

function Content({ children }): JSX.Element {
  return (
    <main className='content'>
      {children}
    </main>
  )
}

export default Content
