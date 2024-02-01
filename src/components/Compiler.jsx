import React,{useState} from 'react'
import Select from "react-select";

const options = [
    { value: 'Python', label: 'Python' },
    { value: 'C++', label: 'C++' },
    { value: 'C', label: 'C' },
    { value: 'Java', label: 'Java' },
  ];
const Compiler = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    function handlePaste(event) {
      event.preventDefault();
    }
  return (
    <div > 
    <div className='lang'>
    <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      
    </div>
    <div className='code'>
    <div class="editor">
					<textarea onPaste={(event) => handlePaste(event)}  id="codeInput" cols={93} rows={30}></textarea>
		</div>

		<div class="outputArea">
					<textarea id="compilerOutput" cols={100} rows={8}></textarea>
		</div>
    </div>
   
    </div>
    
  )
}

export default Compiler