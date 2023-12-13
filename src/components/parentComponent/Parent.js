import React, { useState } from 'react'
import Child from '../childComponent/Child';
import './parent.css';

// let items=JSON.parse(localStorage.getItem(items))
// const list=(items)=>{
//   console.log(items)
//   if(items){
//     return items
//   }else{
//     return []
//   }

const Parent = () => {
    const [inputState,SetInputState]=useState('');
    const [itemList,SetItemList]=useState([])
   

    
    function updateInp(e){
     
      SetInputState({...inputState,[e.target.name]:e.target.value});
      
      // localStorage.setItem("input","inputState");
      // kk
    }
    
    function displayItem(e){
      e.preventDefault();
      console.log(inputState)
      SetItemList([...itemList,inputState])
      // localStorage.setItem('items', JSON.stringify(itemList));
      SetInputState({itemName:'',itemPrice:''})
    }
  return (
    <>
      <div className='parent'>
        <div className='parent-container'>
            <h1>Parent Component</h1>
            <div>
              <form onSubmit={displayItem}>
                <label htmlFor="itemNname">Item Name</label>
                <input type="text" name="itemName" value={inputState.itemName} required onChange={updateInp} id="itemNname" />
                <label htmlFor="itemPrice">Item Price</label>
                <input type="number" name="itemPrice" value={inputState.itemPrice} required onChange={updateInp} id="itemPrice" />
                <button type='submit'>Add Item</button>
              </form>
            </div>
            
          
        </div>
        <Child itemList={itemList} SetItemList={SetItemList}/>
      </div>
     
    </>
  )
}

export default Parent