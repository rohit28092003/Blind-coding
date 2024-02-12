import React,{useState, useEffect} from 'react';
import { RxHeight } from 'react-icons/rx';
import { VscRunAll } from "react-icons/vsc";



const Compiler = (props) => {
  const  {qNo} = props
  console.log(qNo)
  const [count, setCount] = useState(0);
  const [Output, setOutput] = useState("")
  useEffect(() => {
    const storedCount = localStorage.getItem('my-counter');
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('my-counter', count);
  }, [count]);
  
    const [formData, setformDataa] = useState({
      code:"",
      langid:'54'
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
     const languages = ['54', '50', '71', '62'];
  
    const handlesubmit = async (e)=>{
      e.preventDefault();
      setCount(count + 1);
      console.log("submitting")
      if(!langid){
        console.log("error no lang  id")
        return;

      }
      try {
            const program = {
              source_code: code,
              language:langid,
              qNo:props.qNo
              // versionIndex:"0",
              // stdin: "",
              // clientId: "222a2ef84f6881409d32ae21369d1a32",
              // clientSecret:"67872757630a355db890ee74b6b20926cb9e025dbb444182df2bd2700fc64af1"
            };
            console.log(program)
      
            const response = await fetch('https://blind-coding-backend.vercel.app/runCode',{
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              // json:program,
              body: JSON.stringify(program),
            });
      
            // if (!response.ok) {
            //   throw new Error(`API request failed with status ${response.status}`);
            // }
      
            const data = await response.json();
            console.log(data.output)
            setOutput(data.output.message)
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
        <option value={54}>C++</option>
        <option value={50}>C</option>
        <option value={71}>Python</option>
        <option value={62}>Java</option>
        </select>
   
      </div>

      {/* run button-> */}
       <div className='run'>
    
      <button  className="button-48" role="button">
      <VscRunAll size={18} /><span className="text"  
      >
        
        Run</span>
        <span>Count: {count}</span>
         </button>
        
    </div>


     
 
  

 
    </div>
    <div className=''>
    <div className="editor">
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

		<div className="outputArea">
    <div className='output'>Output:</div>
					<textarea id="compilerOutput" cols={100} rows={8} readOnly>
            {
              `Output:${Output}`
            }
          </textarea>
		</div>
    
    </div>
    </form>
   
    </div>
    
  )
}

export default Compiler