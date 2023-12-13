import React, { useState } from 'react'
import Child from '../childComponent/Child';
import './parent.css'
const Parent = () => {
    const [inputState,SetInputState]=useState("")
  return (
    <>
      <div className='parent'>
        <div className='parent-container'>
            <h1>Parent Component</h1>
            <p>{inputState}</p>
            <Child SetInputState={SetInputState}/>
        </div>
      </div>
    </>
  )
}

export default Parent