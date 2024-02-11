import React from 'react'
import Compiler from './Compiler'
import Header from './Header'

const Question4 = () => {
  return (
    <>
     <Header/>
    <div className='both'>
    <div className='left'>
      <div >
        <p>Given an array ‘nums’, partition it in such a way such that,
              all even numbers are at the front, and all the odd numbers are at the back.<br></br>
Input: nums = [3,1,2,4]<br></br>
Output: [2,4,3,1] or [4,2,1,3]

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

export default Question4;