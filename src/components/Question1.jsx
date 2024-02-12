import React from 'react'
import Compiler from './Compiler'
import Header from './Header'

const Question1 = () => {
  return (
    <>
     <Header/>
    <div className='both'>
    <div className='left'>
      <div >
        <p>Find the Missing Number: Given an array of n-1 integers in the range from 1
           to n, find the missing number.<br />
           eg.1: <br />
           [2, 4, 1, 6, 5, 3, 7] <br />
           output:8 <br />
            Input:[4, 1, 2, 5] <br />
           Output: 3<br />
           <br />
           you have to take given below input in your code it have to give corresponding output f<br />
           Input: [2, 4, 1, 6, 3]<br />
           Output: 5<br />
           If it gives correct then output tab shows correct otherwise points will be deducted.
           <br /><br />
           IMPORTANT INFO:
           IN TEXTAREA OF CODE YOU HAVE TO WRITE CODE FROM SCRATCH , YOU HAVE TO INCLUDE ALL LIBRARIES FROM YOUR SIDE , IT'S JUST LIKE A NOTEPAD!!
          
 </p>
    </div>
    </div >
    <div className='right'>
        <Compiler qNo='1' />
    </div>
    </ div>
    </>
    
  )
}

export default Question1;