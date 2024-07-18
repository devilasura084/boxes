
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [series,setSeries]=useState([]);
  const handleClick=(e)=>{
    const id=e.target.id;
    if(series.includes(id))return;
    const newseries=[...series,id];
    setSeries(newseries);
    const div=document.getElementById(id);
    div.classList.remove("cell");
    div.classList.add("cell-transform")
  }
  useEffect(()=>{
    if(series.includes('9'))
    {
        series.forEach((id,index) => {
          setTimeout(()=>{
            const div=document.getElementById(id);
            div.classList.remove("cell-transform");
            div.classList.add("cell")
          },index*500)
      });
      setSeries([]);
    }
  },[series])
  return (
    <div className="matrix">
      <div id='1' onClick={handleClick} className="cell"></div>
      <div id='2' onClick={handleClick} className="cell"></div>
      <div id='3' onClick={handleClick} className="cell"></div>
      <div id='4' onClick={handleClick} className="cell"></div>
      <div id='5' onClick={handleClick} className="cell"></div>
      <div id='6' onClick={handleClick} className="cell"></div>
      <div id='7' onClick={handleClick} className="cell"></div>
      <div id='8' onClick={handleClick} className="cell"></div>
      <div id='9' onClick={handleClick} className="cell"></div>
    </div>
  )
}

export default App
