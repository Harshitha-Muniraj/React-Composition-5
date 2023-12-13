import React from 'react'
import './child.css'
const Child = ({SetInputState}) => {
  return (
    <>
      <div className='children'>
        <h2>Children Component</h2>
        <input type="text" placeholder='Enter' className='inp' onChange={(e)=>SetInputState(e.target.value)} />
      </div>
    </>
  )
}

export default Child