import React, { useState } from 'react';
import Content from './Content';
// const tabData=["Tab 1","Tab 2","Tab 3"]

const Tabs = ({Data,content,SetContent}) => {
  // const [content,SetContent]=useState("Tab 1")
  function showContent(e){
    console.log(e.target.innerText)
    SetContent(e.target.innerText);
    
    
  }
  return (
    <div >
      
      {
        Data.map((item,index)=>{
          return <li onClick={showContent} key={index}>{item}</li>
          
        })
      }
      <Content content={content}/>
    </div>
  )
}

export default Tabs