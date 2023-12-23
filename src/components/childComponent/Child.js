import React from 'react'


const Child = ({items,SetItem}) => {
  
  const updateTodo=(index,e)=>{
    for(let i of items){
      if(items.indexOf(i)==index){
        i.status='completed';
        e.target.style.display='none'
      }
    }
    SetItem([...items]);
    console.log(items)
    
   }
  return (
    <>
    <h2>Child Component</h2>
    {
      items.map((item,index)=>{
        return (
          <ul key={index}>
            <li>{item.name}
            <button onClick={(event) => {updateTodo(index,event)}}>{item.status}</button>
            </li>
          </ul>
        )
      }) 
    }
    </>
  )
}

export default Child