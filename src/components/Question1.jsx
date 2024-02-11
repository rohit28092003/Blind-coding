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
           Input: [1, 2, 3, 4, 6]<br />
           Output: 5<br />
           <br />
           Input:[1, 2, 4, 5] <br />
           Output: 3
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

export default Question1;