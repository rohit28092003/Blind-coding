import React from 'react'
import { Link } from 'react-router-dom';
import { RiPlayList2Line } from "react-icons/ri";
import { VscRunAll } from "react-icons/vsc";
import Timer from './Timer';
import DrawerBasic from './Drawer';

const Header = () => {
  return (
    <nav>
   
       <h1>BLIND CODING</h1>

       
       {/* <button className='button' role='button'>    */}
      <div className='problem'>
   
        <DrawerBasic />
        {/* <div>Problem List</div> */}
      
        </div>
        {/* </button> */}
        <div>
        <Timer />
          </div>
       <div className='run'>
      
         <button class="button-48" role="button"> <VscRunAll size={18} /><span class="text" >Run</span></button>
       </div>
       
       <div className='about'>
       <Link to={"/#about"}>About</Link>
       </div>
       
       
    </nav>
  )
}

export default Header;