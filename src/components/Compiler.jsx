import React,{useState, useEffect} from 'react';
import { RxHeight } from 'react-icons/rx';
import { VscRunAll } from "react-icons/vsc";
 import Counter from './Counter';

const Compiler = ({output,status,testInput, setTestInput}) => {
    const [formData, setformDataa] = useState({
      code:"",
      langid:"C++"
    })
    const {code,langid} = formData;
    const handlechange = (e)=>{
      const {name,value} = e.target
      console.log(name,value)
      setformDataa(prev=>(
        {
          ...prev,
          [e.target.name]:e.target.value
        }
      ))
    }
     const languages = ['54', '45', '71', '62'];
  
    const handlesubmit = async (e)=>{
      e.preventDefault();
      console.log("submitting")
      try {
            const program = {
              script: code,
              language: 'php',
              versionIndex:"0",
              // stdin: "",
              clientId: "222a2ef84f6881409d32ae21369d1a32",
              clientSecret:"67872757630a355db890ee74b6b20926cb9e025dbb444182df2bd2700fc64af1"
            };
            console.log(program)
      
            const response = await fetch('cors-anywhere.https://api.jdoodle.com/execute',{
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              // json:program,
              body: JSON.stringify(program),
            });
      
            // if (!response.ok) {
            //   throw new Error(`API request failed with status ${response.status}`);
            // }
      
            const data = await response.json();
            console.log(data)
          } catch (error) {
            console.error('Error:', error);
            
          }

  
    }

    function handlePaste(event) {
      event.preventDefault();
    }
    function handleCopy(event) {
      event.preventDefault();
    }

    return(
    <div > 
      <form onSubmit={handlesubmit}>
      <div className='side'>
    <div >
      
    <select className='lang'
        defaultValue={langid}
        onChange={handlechange}
        id='langid'
        name="langid"
        value={formData.langid}
      >
        <option value={0}>C++</option>
        <option value={1}>C</option>
        <option value={2}>Python</option>
        <option value={3}>Java</option>
        </select>
   
      </div>
<div><Counter /></div>
      {/* run button-> */}
       <div className='run'>
    
      <button   class="button-48" role="button"> 
      <VscRunAll size={18} /><span class="text"  
      >
        
        Run</span></button>
    </div>

{/* counter */}
     
 
  

 
    </div>
    <div className=''>
    <div class="editor">
					<textarea 
          onCut={(event)=>handlePaste(event)} 
          onPaste={(event) => handlePaste(event)}
          onCopy={(event) => handleCopy(event)} 
          className="codeInput" 
          id='code'
          name='code'
          value={code}
          onChange={handlechange}
          cols={93} rows={30}></textarea>
		</div>

		<div class="outputArea">
    <div className='output'>Output:</div>
					<textarea id="compilerOutput" cols={100} rows={8}></textarea>
		</div>
    
    </div>
    </form>
   
    </div>
    
  )
}

export default Compiler