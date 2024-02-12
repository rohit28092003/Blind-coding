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
                Output: True <br />
                Input: 2 <br /> 
                Output: True <br />   
                 Input: 3 <br /> 
                Output: False <br />
                Input: 4 <br /> 
                Output: True <br /><br />
                you have to take given below input in your code it have to give corresponding output format <br />
           Input: 16<br />
           Output: True<br />
           If it gives correct then output tab shows correct otherwise points will be deducted.
           <br /><br />
           IMPORTANT INFO:
           IN TEXTAREA OF CODE YOU HAVE TO WRITE CODE FROM SCRATCH , YOU HAVE TO INCLUDE ALL LIBRARIES FROM YOUR SIDE , IT'S JUST LIKE A NOTEPAD!!
          
                
  
     </p>
        </div>
        </div >
        <div className='right'>
            <Compiler qNo='2'/>
        </div>
        </ div>
        </>
        
      )
}

export default Question2