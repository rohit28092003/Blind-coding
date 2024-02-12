import React from 'react'
import Compiler from './Compiler'
import Header from './Header'

const Question3 = () => {
  return (
    <>
     <Header/>
    <div className='both'>
    <div className='left'>
      <div >
        <p> Find the median of 2 sorted arrays :<br></br>
array1=[1,2,7,8]<br></br>
array2=[3,5,9,10]<br></br>
n = 4<br></br>
After merging the two sorted arrays,<br></br>
    array1+array2=[1,2,3,5,7,8,9,10]<br></br>
    median = (5+7)/2 = 6

 </p>
    </div>
    </div >
    <div className='right'>
        <Compiler qNo='3'/>
    </div>
    </ div>
    </>
    
  )
}

export default Question3;