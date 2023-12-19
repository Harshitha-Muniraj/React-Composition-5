import React from 'react'
import './child.css'
const Child = ({SetLogin}) => {

  const loginCheck=(e)=>{
    e.preventDefault();
    SetLogin(true)
  }

  return (
    <>
    <form onSubmit={loginCheck}>
    <div>
      <label>UserName:</label>
      <input required/>
    </div>
    <div>
      <label>PassWord</label>
      <input required/>
    </div>
    <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Child