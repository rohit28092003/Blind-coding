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
        <p> Find the median of 2 sorted arrays :<br />
        array1 = [1, 3, 5], array2 = [2, 4, 6]<br/>
        After merging the two sorted arrays: <br/>
        array1+array2=[1,2,3,4,5,6]<br />
         Median = 3.5 <br /> <br />

        array1 = [2, 4], array2 = [1, 3, 5]: Median = 3
<br /><br />
you have to take given below input in your code it have to give corresponding output format <br />
Input: array1=[1,2,7,8]<br></br>
       array2=[3,5,9,10]<br></br>
n = 4<br></br>
After merging the two sorted arrays,<br></br>
    array1+array2=[1,2,3,5,7,8,9,10]<br></br>
  output:  median = (5+7)/2 = 6 <br />
  If it gives correct then output tab shows correct otherwise points will be deducted.
           <br /><br />
           IMPORTANT INFO:
           IN TEXTAREA OF CODE YOU HAVE TO WRITE CODE FROM SCRATCH , YOU HAVE TO INCLUDE ALL LIBRARIES FROM YOUR SIDE , IT'S JUST LIKE A NOTEPAD!!
          

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