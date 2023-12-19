import React, { useState } from 'react';
import Child from '../childComponent/Child';

const Parent = () => {
  const [login,SetLogin]=useState(false)
  return (
    <>
    <h1>Parent Component</h1>
    {login?<h2>Login Successful</h2>:null}
    {login?null:<Child SetLogin={SetLogin} />}
    </>
  )
}

export default Parent