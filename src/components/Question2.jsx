import React from 'react'
import Compiler from './Compiler'
import Header from './Header'

const Question2 = () => {
    return (
        <>
         <Header/>
        <div className='both'>
        <div className='left'>
          <div >
            <p>Check if a Number is a Power of Two:<br></br> Write a function that checks if 
                a number is a power of two. <br />
                Input: 1 <br /> 
                Output: True <br /><br />
                Input: 2 <br /> 
                Output: True <br /><br />    
                 Input: 3 <br /> 
                Output: False <br /><br />
                Input: 4 <br /> 
                Output: True <br /><br />
  
     </p>
        </div>
        </div >
        <div className='right'>
            <Compiler />
        </div>
        </ div>
        </>
        
      )
}

export default Question2