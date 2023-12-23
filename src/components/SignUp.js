import React, { useState } from 'react';


const SignUp = () => {
  const [items,SetItem]=useState({});

  function handleChange(e){
    SetItem({...items,[e.target.name]:e.target.value})
  }

  function displayDetails(e){
    e.preventDefault();
   console.log(items)
  }
  
  return (
    <form onSubmit={displayDetails}>
      <div>
        <label htmlFor="name">Name : </label>
          <input type="text" name="name" id='name' onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="email">Email : </label>
          <input type="email" name="email" id='email' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password :</label>
          <input type="password" name="password" id='password' onChange={handleChange} />
      </div>
      <button type='submit'>Submit</button>
    </form>

  )
}
export default SignUp;