
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineLocalPolice,MdShareLocation } from "react-icons/md";
import {  Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
   const navigate=useNavigate()

  return (
    <>
    <div className="side_bar_mobile_nav">
         <i id='nav_toggler' ><BiMenuAltLeft /></i>
         <div>
            <i onClick={()=>{navigate('/')}}><AiOutlineHome /></i>
            <i onClick={()=>navigate('/zone')}><MdShareLocation /></i>
         </div>
    </div>
       <div className="side_bar_top">
        <div className="img-container">
           <img onClick={()=>navigate('/')} src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="stockone" />
        </div>
        <h1>stock one</h1>
        <p>statistics for tomoroow evolution</p>
       </div>
       <div className="side_bar_bottom">
           <ul>
              <Link to='/' className='nav-link'><FaLocationArrow className='icon' /> Home</Link>
              <Link to='/zone' className='nav-link'><MdOutlineLocalPolice className='icon' /> Zones</Link>
           </ul>
       </div>
    </>
  )
}

export default Navbar