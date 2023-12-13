import React from 'react'
import './child.css'
const Child = ({itemList,SetItemList}) => {
 const removeItem=(pp)=>{
const update=[]
itemList.map((ii,index)=>{
  console.log(pp,index)
   if (index!=pp){
      return update.push(ii)
   }
 })
 SetItemList(update)
 }
  
  return (
    <>
    <div className='children'>
        <h2>Children Component</h2>
        
     <div>
      {
        itemList.map((item,index)=>{
          const {itemName,itemPrice}=item
          return(
            <>
            <div  key={index} className='flex'>
            <ul>
              <li >
                {itemName}- &#8377;{itemPrice}
              </li>
            </ul>
            <button className='btn' onClick={()=>removeItem(index)}>Remove</button>
            </div>
            
            </>
          )
        })
      }
       
     </div>
     </div>
    </>
  )
}

export default Child