import React from 'react'
import { Link } from 'react-router-dom';
import { RiPlayList2Line } from "react-icons/ri";
import { VscRunAll } from "react-icons/vsc";

const Header = () => {
  return (
    <nav>
    
       <h1>BLIND CODING</h1>
      <div className='problem'>
        <div>
        <RiPlayList2Line size={25} marginTop={20} />
        </div>
        Problem List</div>
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