import React, { useState } from 'react';
import Child from '../childComponent/Child';

const Parent = () => {
  const todos=[{name:"Learn React",status:"Complete"},{name:"Build a React App",status:"Complete"},{name:"Deploy React App",status:"Complete"}]
  const [items,SetItem]=useState(todos)
  return (
    <>
    <h1>Parent Component</h1>
    <Child items={items} SetItem={SetItem}/>
    </>
  )
}

export default Parent