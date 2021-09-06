import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

const [exp,setexp] = useState("")
const ops=['/','*','+','-']
var cln=()=>{
  setexp([])
}

 
var fn=(e)=>{
console.log(e.target.innerText);
var value=e.target.innerText
setexp(exp+value)
if(value=="=")
{
  var res=eval(exp)
  console.log("ali")
  console.log(res)
  setexp(`RESULT IS :  ${res}`)
}


}


var bck=()=>{
  setexp(exp.slice(0, -1))
}



  return (
    <>
    <div className="main">
    
      <div className='box'>

        <div className="Title"> Calculator</div>
        <div className="row">{exp}
      <button className="backspc" onClick={bck}><i class="fas fa-angle-double-left"></i></button>
 </div>
 <div className="btnrow">
   <button onClick={cln} className="grey">AC</button>
   <button onClick={fn} className="grey">+/-</button>
   <button onClick={fn} className="grey">%</button>
   <button onClick={fn} className="btnq">/</button>
 
 
 
 
 </div>

 <div className="btnrow">
   <button onClick={fn} className="btn">1</button>
   <button onClick={fn} className="btn">2</button>
   <button onClick={fn} className="btn">3</button>
   <button onClick={fn} className="btnq">*</button>
 </div>

 <div className="btnrow">
   <button  onClick={fn} className="btn">4</button>
   <button onClick={fn}  className="btn">5</button>
   <button  onClick={fn} className="btn">6</button>
   <button onClick={fn}  className="btnq">-</button>
 
 </div>


 <div className="btnrow">
   <button  onClick={fn}  className="btn">7</button>
   <button  onClick={fn} className="btn">8</button>
   <button  onClick={fn} className="btn">9</button>
   <button onClick={fn}  className="btnq">+</button>
 
 </div>

 <div className="btnrow">
   
   <button  onClick={fn} className="btnz">0</button>
   <button onClick={fn}  className="btn">.</button>
   <button onClick={fn}  className="btnq">=</button>
 
 </div>

      </div>
    </div>
    </>
  );
}

export default App;
