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
              all even numbers are at the front, and all the odd numbers are at the back.<br />
              eg.1 Input: [1, 3, 2, 7, 5, 4] <br />
              Output:[2,4,7,5,3,1] <br /><br />
              you have to take given below input in your code it have to give corresponding output format <br />
Input: nums = [3,1,2,4]<br></br>
Output: <br />2 <br/>4 <br />3<br />1<br />
If it gives correct then output tab shows correct otherwise points will be deducted.
           <br /><br />
           IMPORTANT INFO:
           IN TEXTAREA OF CODE YOU HAVE TO WRITE CODE FROM SCRATCH , YOU HAVE TO INCLUDE ALL LIBRARIES FROM YOUR SIDE , IT'S JUST LIKE A NOTEPAD!!
          



 </p>
    </div>
    </div >
    <div className='right'>
        <Compiler qNo='4'/>
    </div>
    </ div>
    </>
    
  )
}

export default Question4;