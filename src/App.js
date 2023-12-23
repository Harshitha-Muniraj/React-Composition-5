import { useState } from "react";
import Tabs from "./components/Tabs";
import './App.css'

function App() {
  const [contentUp,SetContentup]=useState("Tab 1");
  const [contentNext,SetContentnext]=useState("Tab A")
  const tabData1=["Tab 1","Tab 2","Tab 3"];
  const tabData2=["Tab A","Tab B","Tab C"]

  return (
    <>
    <Tabs Data={tabData1} content={contentUp} SetContent={SetContentup}/>
    <Tabs Data={tabData2} content={contentNext} SetContent={SetContentnext}/>
    </>
  );
}

export default App;
