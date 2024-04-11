import React, { useState } from 'react';
import './App.css';

function App() {
  const[inputarr,SetInputarr]=useState([])
  const[inputdata,SetInputdata]=useState({
    name:"",
    rollNo:"",
    contact:"",
  });

  function changehandle(e){
    SetInputdata({...inputdata,[e.target.name] : e.target.value})
    // console.log (inputarr);
    // console.log (inputdata);
    // SetInputdata({name:"",rollNo:"",contact:""})
  }

  let {name,rollNo,contact}=inputdata;

  function changehandle1(){
    SetInputarr([...inputarr,{name,rollNo,contact}])
    SetInputdata({name:"",rollNo:"",contact:""})
    
  }

  
  return (
    <div className="App">
      <div className='section1'>

        <h1 class="navbar">FORM</h1>
      <input type="text" name="name" value={inputdata.name} onChange={changehandle} placeholder='enter name' autoComplete='off'/><br/><br/> 

      <input type="text" name="rollNo" value={inputdata.rollNo} onChange={changehandle} placeholder='enter roll No'autoComplete='off'/><br/><br/>

      <input type="text" name="contact" value={inputdata.contact} onChange={changehandle} placeholder='enter contact' autoComplete='off'/><br/><br/>    

      <button onClick={changehandle1}>Submit</button><br/> <br/> 
      {/* <button onClick={changehandle2}>Check</button><br/> <br/>  */}

    </div>

    <div className='section2'>
      <table border={2} cellPadding={5} width="75%">
        <tbody>
          <tr>
            <td>name </td>
            <td>rollNo </td>
            <td>contact </td>
          </tr>
          {
            inputarr.map(
              (info,ind)=>{
                return(
                  <tr>
                    <td>{info.name}</td>
                    <td>{info.rollNo}</td>
                    <td>{info.contact}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;


